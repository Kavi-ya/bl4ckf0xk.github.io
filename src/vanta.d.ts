// src/vanta.d.ts
declare global {
  interface VantaFogOptions {
    el: HTMLElement;
    mouseControls?: boolean;
    touchControls?: boolean;
    color?: string; // Example option
    speed?: number; // Example option
    // Add other known options from Vanta.js FOG
    [key: string]: unknown; // Fallback for unknown options, using 'unknown' instead of 'any'
  }

  interface Window {
    VANTA?: {
      FOG: (options: VantaFogOptions) => {
        destroy: () => void;
      };
    };
  }
}

export {};