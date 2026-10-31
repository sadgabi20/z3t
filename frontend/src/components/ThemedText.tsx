import React from "react";
import { Text } from "react-native";

interface ThemedTextProps {
    style?: any,
    children: React.ReactNode,
    size?: number,
}

export default function ThemedText({ children, style, size, ...props }: ThemedTextProps) {
    return (
        <Text style={[styles.text, style, { fontSize: size }]} {...props}>
            {children}
        </Text>
    )
}

const styles = {
    text: {
        color: 'var(--text-body)',
        fontSize: 16,
    }
}