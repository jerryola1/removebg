'use server'

import * as fal from "@fal-ai/serverless-client";

interface RemBgResult {
  image: {
    url: string;
    content_type: string;
    file_name: string;
    file_size: number;
    width: number;
    height: number;
  };
}

export async function removeBackground(imageUrl: string) {
  console.log("Starting removeBackground function");
  if (!process.env.FAL_KEY) {
    console.error("FAL_KEY is not set in environment variables");
    throw new Error("FAL_KEY is not set in environment variables");
  }

  fal.config({
    credentials: process.env.FAL_KEY,
  });

  try {
    console.log("Calling fal.subscribe with imageUrl:", imageUrl);
    const result = await fal.subscribe<RemBgResult, { input: { image_url: string } }>(
      "fal-ai/imageutils/rembg",
      {
        input: {
          image_url: imageUrl,
        },
      }
    );

    console.log("Result from fal.subscribe:", result);

    if (!('image' in result) || !result.image || !result.image.url) {
      console.error("Invalid response from background removal service:", result);
      throw new Error("Invalid response from background removal service");
    }

    console.log("Returning processed image URL:", result.image.url);
    return result.image.url;
  } catch (error) {
    console.error("Error removing background:", error);
    throw new Error("Failed to remove background. Please try again.");
  }
}
