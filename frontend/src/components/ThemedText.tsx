import React from "react";
import { Text, type StyleProp, type TextProps, type TextStyle } from "react-native";

import { useTheme } from "@/hooks/use-theme";

interface ThemedTextProps extends TextProps {
    style?: StyleProp<TextStyle>,
    children: React.ReactNode,
    size?: number,
}

export default function ThemedText({ children, style, size, ...props }: ThemedTextProps) {
    const theme = useTheme();

    return (
        <Text
            style={[
                styles.text,
                { color: theme.text },
                style,
                size != null && { fontSize: size },
            ]}
            {...props}
        >
            {children}
        </Text>
    )
}

const styles = {
    text: {
        fontSize: 16,
    } satisfies TextStyle,
}
