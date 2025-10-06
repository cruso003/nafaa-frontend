"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { THEMES, DEFAULT_THEME } from "@/config/constants";

export type Theme = typeof THEMES[number];

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME as Theme,
      setTheme: (theme) => {
        set({ theme });
        // Apply theme to document
        document.documentElement.setAttribute("data-theme", theme);
      },
    }),
    {
      name: "nafaa-theme",
      onRehydrateStorage: () => (state) => {
        // Apply theme on rehydration
        if (state?.theme) {
          document.documentElement.setAttribute("data-theme", state.theme);
        }
      },
    }
  )
);
