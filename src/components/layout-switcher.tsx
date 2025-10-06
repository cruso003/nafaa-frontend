"use client";

import { useState, useEffect } from "react";
import { layouts, getLayoutFromUrl, setLayoutUrl, type LayoutType } from "@/lib/layout-config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Layout as LayoutIcon, Check } from "lucide-react";

export function LayoutSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('modern');

  useEffect(() => {
    setCurrentLayout(getLayoutFromUrl());

    // Keyboard shortcut: Ctrl+Shift+L to toggle switcher
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleLayoutChange = (layout: LayoutType) => {
    setLayoutUrl(layout);
    window.location.reload(); // Reload to apply new layout
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-14 left-4 z-[100] p-3 bg-nafaa-ocean text-white rounded-full shadow-lg hover:bg-nafaa-ocean-dark transition-all"
        title="Layout Switcher (Ctrl+Shift+L)"
      >
        <LayoutIcon className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <LayoutIcon className="h-6 w-6 text-nafaa-ocean" />
                Layout Switcher
              </CardTitle>
              <CardDescription className="mt-2">
                Choose a homepage layout variant. Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+Shift+L</kbd> to toggle this panel.
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {Object.values(layouts).map((layout) => (
              <Card
                key={layout.id}
                className={`cursor-pointer transition-all ${
                  currentLayout === layout.id
                    ? 'ring-2 ring-nafaa-ocean bg-nafaa-ocean/5'
                    : 'hover:shadow-lg'
                }`}
                onClick={() => handleLayoutChange(layout.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {layout.name}
                        {currentLayout === layout.id && (
                          <Check className="h-5 w-5 text-nafaa-ocean" />
                        )}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {layout.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="font-semibold text-nafaa-ocean">Hero:</span>{' '}
                        {layout.features.hero}
                      </div>
                      <div>
                        <span className="font-semibold text-nafaa-ocean">Stats:</span>{' '}
                        {layout.features.stats}
                      </div>
                      <div>
                        <span className="font-semibold text-nafaa-ocean">Officials:</span>{' '}
                        {layout.features.officials}
                      </div>
                      <div>
                        <span className="font-semibold text-nafaa-ocean">Services:</span>{' '}
                        {layout.features.services}
                      </div>
                      <div className="col-span-2">
                        <span className="font-semibold text-nafaa-ocean">News:</span>{' '}
                        {layout.features.news}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>💡 Tip:</strong> Share different layouts with stakeholders using URL parameters:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-blue-800">
              <li>• <code className="bg-blue-100 px-2 py-0.5 rounded">?layout=modern</code> - Current design</li>
              <li>• <code className="bg-blue-100 px-2 py-0.5 rounded">?layout=split</code> - Split hero layout</li>
              <li>• <code className="bg-blue-100 px-2 py-0.5 rounded">?layout=slider</code> - Slider layout</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
