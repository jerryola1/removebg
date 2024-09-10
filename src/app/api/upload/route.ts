import { NextResponse } from 'next/server';
import * as fal from "@fal-ai/serverless-client";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Upload the file to fal storage
    const uploadedUrl = await fal.storage.upload(file);
    console.log("File uploaded, returning image URL:", uploadedUrl);
    return NextResponse.json({ url: uploadedUrl });
  } catch (error) {
    console.error('Error in file upload:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}
