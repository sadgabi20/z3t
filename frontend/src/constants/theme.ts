/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  dark: {
    text: '#ffffff',
    mainColor: "#ffffff1a",
    bgGradient: {
      colors: ["#15071F", "#15071F", "#090512"],
      locations: [0, 0.5, 1],
      start: { x: 0.25, y: 0 },
      end: { x: 0.5, y: 1 },
    },
    bgSurfaceGradientHover: {
      colors: ['#ffffff1a', '#ffffff1a', '#ffffff0d'],
      locations: [0, 0.25, 1],
      start: { x: 0.25, y: 0 },
      end: { x: 0.75, y: 1 },
    },
    bgSurfaceGradient: {
      colors: ['#00000000', '#00000000', '#00000000'],
      locations: [0, 0.25, 1],
      start: { x: 0.25, y: 0 },
      end: { x: 0.75, y: 1 },
    },
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA'
  }
} as const;

export type ThemeColor = keyof typeof Colors.dark;

/** Keys in `Colors` whose values can be spread onto a `LinearGradient`. */
export type GradientThemeKey = 'bgGradient' | 'bgSurfaceGradient' | 'bgSurfaceGradientHover';

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
