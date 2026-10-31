import React from "react";
import { Text } from "react-native";

interface ThemedTextProps {
    style?: any,
    children: React.ReactNode;
}

export default function ThemedText({ children, style, ...props }: ThemedTextProps) {
    return (
        <Text style={[styles.text, style]} {...props}>
            {children}
        </Text>
    )
}

const styles = {
    text: {
        color: 'var(--text-body)',
    }
}