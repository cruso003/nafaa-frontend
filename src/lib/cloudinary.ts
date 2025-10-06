import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "@/config/constants";

// Configure Cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export interface UploadResult {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
}

/**
 * Upload a file to Cloudinary
 * @param file - Base64 encoded file or file path
 * @param folder - Optional folder name in Cloudinary
 * @returns Upload result with public_id and secure_url
 */
export async function uploadToCloudinary(
  file: string,
  folder?: string
): Promise<UploadResult> {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: folder || "nafaa",
      resource_type: "auto",
      transformation: [
        { quality: "auto", fetch_format: "auto" },
      ],
    });

    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
      resource_type: result.resource_type,
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload file");
  }
}

/**
 * Delete a file from Cloudinary
 * @param publicId - The public ID of the file to delete
 */
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw new Error("Failed to delete file");
  }
}

/**
 * Get optimized image URL
 * @param publicId - The public ID of the image
 * @param transformations - Optional transformation options
 */
export function getOptimizedImageUrl(
  publicId: string,
  transformations?: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string;
    format?: string;
  }
): string {
  return cloudinary.url(publicId, {
    transformation: [
      {
        width: transformations?.width,
        height: transformations?.height,
        crop: transformations?.crop || "fill",
        quality: transformations?.quality || "auto",
        fetch_format: transformations?.format || "auto",
      },
    ],
  });
}

export default cloudinary;
