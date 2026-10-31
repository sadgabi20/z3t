import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';

import { type GradientThemeKey } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

interface SurfaceGradientProps extends Omit<LinearGradientProps, 'colors' | 'locations' | 'start' | 'end'> {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>,
    clear?: boolean,
    type?: GradientThemeKey,
}

export default function SurfaceGradient({ children, style, clear = false, type, ...props }: SurfaceGradientProps) {
    const theme = useTheme();
    const gradient = theme[type ?? (clear ? 'bgSurfaceGradientHover' : 'bgSurfaceGradient')];

    return (
        <LinearGradient
            {...gradient}
            style={style}
            {...props}
        >
            {children}
        </LinearGradient>
    );
}