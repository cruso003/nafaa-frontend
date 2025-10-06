import Image from "next/image";
import { GoogleTranslateSwitcher } from "@/components/google-translate-switcher";

export function GovernmentBanner() {
  return (
    <div className="bg-nafaa-ocean text-white py-2 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/liberia-flag.svg"
            alt="Flag of Liberia"
            width={24}
            height={16}
            className="rounded-sm"
          />
          <span className="font-medium">
            An official website of the Government of The Republic of Liberia
          </span>
        </div>
        <GoogleTranslateSwitcher />
      </div>
    </div>
  );
}
