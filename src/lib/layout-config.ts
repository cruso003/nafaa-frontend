// Homepage Layout Configuration System

export type LayoutType = 'modern' | 'split' | 'slider';

export interface LayoutConfig {
  id: LayoutType;
  name: string;
  description: string;
  features: {
    hero: string;
    stats: string;
    officials: string;
    services: string;
    news: string;
  };
}

export const layouts: Record<LayoutType, LayoutConfig> = {
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Current design with full-width hero and animated elements',
    features: {
      hero: 'Full-width background with gradient overlay',
      stats: 'Animated stat cards in grid',
      officials: 'Horizontal card layout',
      services: 'Feature grid with icons',
      news: 'Standard grid layout',
    },
  },
  split: {
    id: 'split',
    name: 'Split Hero',
    description: 'Split layout with content left, image right, and zigzag officials',
    features: {
      hero: 'Left content + Right hero image',
      stats: 'Animated counter section',
      officials: 'Zigzag layout (Left → Right → Left)',
      services: 'Uniform grid with consistent cards',
      news: 'Sidebar layout (News left, Publications right)',
    },
  },
  slider: {
    id: 'slider',
    name: 'Slider',
    description: 'Carousel-based hero with tabbed services',
    features: {
      hero: 'Image slider with multiple slides',
      stats: 'Inline badges overlaying hero',
      officials: 'Compact horizontal scroll',
      services: 'Tabbed category interface',
      news: 'Featured card + list view',
    },
  },
};

export function getLayoutFromUrl(): LayoutType {
  if (typeof window === 'undefined') return 'modern';
  
  const params = new URLSearchParams(window.location.search);
  const layout = params.get('layout') as LayoutType;
  
  return layouts[layout] ? layout : 'modern';
}

export function setLayoutUrl(layout: LayoutType) {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  url.searchParams.set('layout', layout);
  window.history.pushState({}, '', url.toString());
}
