"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";
import { USE_MOCK_DATA } from "@/config/constants";
import type { AxiosError } from "axios";

interface UseApiOptions<TData = any> {
  enabled?: boolean;
  refetchOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
  cacheTime?: number;
  retry?: number | boolean;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

/**
 * Custom hook for GET requests
 */
export function useApi<TData = any>(
  url: string | null,
  mockData?: TData,
  options?: UseApiOptions<TData>
) {
  return useQuery<TData, AxiosError>({
    queryKey: [url],
    queryFn: async () => {
      if (USE_MOCK_DATA && mockData) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        return mockData;
      }

      if (!url) throw new Error("URL is required");
      const { data } = await axiosInstance.get<TData>(url);
      return data;
    },
    enabled: !!url && options?.enabled !== false,
    staleTime: options?.staleTime,
    gcTime: options?.cacheTime,
    refetchOnMount: options?.refetchOnMount,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    retry: options?.retry ?? 1,
  });
}

/**
 * Custom hook for POST/PUT/PATCH/DELETE mutations
 */
export function useApiMutation<TData = any, TVariables = any>(
  url: string,
  method: "post" | "put" | "patch" | "delete" = "post",
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: AxiosError, variables: TVariables) => void;
    invalidateQueries?: string[];
    mockResponse?: TData;
  }
) {
  const queryClient = useQueryClient();

  return useMutation<TData, AxiosError, TVariables>({
    mutationFn: async (variables) => {
      if (USE_MOCK_DATA && options?.mockResponse) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        return options.mockResponse;
      }

      const { data } = await axiosInstance[method]<TData>(url, variables);
      return data;
    },
    onSuccess: (data, variables) => {
      // Invalidate and refetch queries
      if (options?.invalidateQueries) {
        options.invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey: [queryKey] });
        });
      }

      options?.onSuccess?.(data, variables);
    },
    onError: options?.onError,
  });
}
