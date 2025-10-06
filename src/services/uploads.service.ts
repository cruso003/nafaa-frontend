import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";
import { uploadToCloudinary, type UploadResult } from "@/lib/cloudinary";

interface UploadResponse {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  format?: string;
}

export const uploadsService = {
  /**
   * Upload file (client-side via API route)
   */
  async uploadFile(file: File, folder?: string): Promise<UploadResponse> {
    if (USE_MOCK_DATA) {
      // Mock upload
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return {
        url: URL.createObjectURL(file),
        publicId: `mock/${Date.now()}_${file.name}`,
        width: 1200,
        height: 800,
        format: file.type.split("/")[1],
      };
    }

    const formData = new FormData();
    formData.append("file", file);
    if (folder) formData.append("folder", folder);

    const { data } = await axiosInstance.post<UploadResponse>(
      "/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  },

  /**
   * Upload multiple files
   */
  async uploadMultiple(
    files: File[],
    folder?: string
  ): Promise<UploadResponse[]> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      return files.map((file) => ({
        url: URL.createObjectURL(file),
        publicId: `mock/${Date.now()}_${file.name}`,
        width: 1200,
        height: 800,
        format: file.type.split("/")[1],
      }));
    }

    const uploadPromises = files.map((file) => this.uploadFile(file, folder));
    return Promise.all(uploadPromises);
  },

  /**
   * Delete uploaded file
   */
  async deleteFile(publicId: string): Promise<void> {
    if (USE_MOCK_DATA) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return;
    }

    await axiosInstance.delete(`/upload/${publicId}`);
  },
};
