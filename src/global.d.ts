// src/global.d.ts
import { VantaEffect } from 'vanta';

declare global {
  interface Window {
    VANTA?: {
      [key: string]: VantaEffect;
    };
  }
}