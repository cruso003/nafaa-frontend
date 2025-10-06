"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import { AuthProvider } from "@/providers/auth-provider";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { CACHE_DURATION, ENABLE_DEV_TOOLS } from "@/config/constants";

export function Providers({ children }: { children: React.ReactNode }) {
  // Create a client instance inside the component to avoid sharing state between requests
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: CACHE_DURATION.MEDIUM * 1000,
            gcTime: CACHE_DURATION.LONG * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      })
  );

  return (
    <TranslationProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              duration: 4000,
              classNames: {
                toast: "font-sans",
              },
            }}
          />
          {ENABLE_DEV_TOOLS && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </AuthProvider>
    </TranslationProvider>
  );
}
