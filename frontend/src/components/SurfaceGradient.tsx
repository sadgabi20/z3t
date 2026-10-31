import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';

interface SurfaceGradientProps {
    children: React.ReactNode,
    style?: any,
    clear?: boolean,
}

export default function SurfaceGradient({ children, style, clear = false, ...props }: SurfaceGradientProps) {
    return (
        <LinearGradient
            colors={clear
                ? ['rgba(255, 255, 255, 0.10)', 'rgba(255, 255, 255, 0.10)', 'rgba(255, 255, 255, 0.05)']
                : ['#000000', '#000000', '#000000']}
            locations={[0, 0.25, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style}
            {...props}
        >
            {children}
        </LinearGradient>
    );
}