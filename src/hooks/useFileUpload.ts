"use client";

import { useState, useCallback } from "react";
import { USE_MOCK_DATA } from "@/config/constants";

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

export interface UploadResult {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  format?: string;
}

export interface UseFileUploadReturn {
  upload: (file: File, folder?: string) => Promise<UploadResult>;
  uploadProgress: UploadProgress | null;
  isUploading: boolean;
  error: string | null;
  reset: () => void;
}

export function useFileUpload(): UseFileUploadReturn {
  const [uploadProgress, setUploadProgress] = useState<UploadProgress | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = useCallback(async (file: File, folder?: string): Promise<UploadResult> => {
    setIsUploading(true);
    setError(null);
    setUploadProgress({ loaded: 0, total: file.size, percentage: 0 });

    try {
      if (USE_MOCK_DATA) {
        // Mock upload simulation
        return new Promise((resolve) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 10;
            setUploadProgress({
              loaded: (file.size * progress) / 100,
              total: file.size,
              percentage: progress,
            });

            if (progress >= 100) {
              clearInterval(interval);
              setIsUploading(false);
              
              // Create mock object URL
              const mockUrl = URL.createObjectURL(file);
              
              resolve({
                url: mockUrl,
                publicId: `mock/${Date.now()}_${file.name}`,
                width: 1200,
                height: 800,
                format: file.type.split("/")[1],
              });
            }
          }, 200);
        });
      } else {
        // Real Cloudinary upload
        const formData = new FormData();
        formData.append("file", file);
        if (folder) formData.append("folder", folder);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Upload failed");
        }

        const result = await response.json();
        setIsUploading(false);
        setUploadProgress({ loaded: file.size, total: file.size, percentage: 100 });

        return {
          url: result.secure_url,
          publicId: result.public_id,
          width: result.width,
          height: result.height,
          format: result.format,
        };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Upload failed";
      setError(errorMessage);
      setIsUploading(false);
      throw new Error(errorMessage);
    }
  }, []);

  const reset = useCallback(() => {
    setUploadProgress(null);
    setIsUploading(false);
    setError(null);
  }, []);

  return {
    upload,
    uploadProgress,
    isUploading,
    error,
    reset,
  };
}
