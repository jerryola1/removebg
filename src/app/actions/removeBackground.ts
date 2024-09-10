'use server';

import * as fal from "@fal-ai/serverless-client";

// This interface defines the structure of the result expected from the API
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

// This interface defines the input to be sent to the API
interface RemBgInput {
  image_url: string;
}

// Function to remove background from an image
export async function removeBackground(imageUrl: string) {
  console.log("Starting removeBackground function");

  // Ensure that the FAL_KEY environment variable is set
  if (!process.env.FAL_KEY) {
    console.error("FAL_KEY is not set in environment variables");
    throw new Error("FAL_KEY is not set in environment variables");
  }

  // Configure the Fal AI client with credentials
  fal.config({
    credentials: process.env.FAL_KEY,
  });

  try {
    console.log("Calling fal.run with imageUrl:", imageUrl);

    // Call the API for background removal and process the image URL
    const result: any = await fal.run<any, { input: RemBgInput }>("fal-ai/imageutils/rembg", {
      input: {
        image_url: imageUrl,  // Pass the image URL as input
      },
    });

    console.log("Result from fal.run:", result);

    // Ensure the result contains a valid image object
    if (!result || typeof result !== 'object' || !result.image || !result.image.url) {
      console.error("Invalid response from background removal service:", result);
      throw new Error("Invalid response from background removal service");
    }

    // Return the URL of the processed image
    console.log("Returning processed image URL:", result.image.url);
    return result.image.url;
  } catch (error) {
    console.error("Error removing background:", error);
    throw new Error("Failed to remove background. Please try again.");
  }
}
