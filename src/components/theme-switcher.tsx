"use client";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { THEMES } from "@/config/constants";

const themeLabels: Record<string, string> = {
  default: "Default",
  modern: "Modern",
  classic: "Classic",
  minimal: "Minimal",
};

const themeIcons: Record<string, string> = {
  default: "🎨",
  modern: "✨",
  classic: "📜",
  minimal: "⚪",
};

export function ThemeSwitcher() {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">{themeLabels[currentTheme]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => setTheme(theme)}
            className="gap-2"
          >
            <span>{themeIcons[theme]}</span>
            <span>{themeLabels[theme]}</span>
            {currentTheme === theme && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
