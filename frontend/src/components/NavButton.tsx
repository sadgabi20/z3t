import { Pressable, StyleSheet, View } from "react-native";

import SurfaceGradient from "./SurfaceGradient";
import ThemedText from "./ThemedText";
import { useState } from "react";

interface NavButtonProps {
    name: string,
}

export default function NavButton({ name }: NavButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
        >
            <SurfaceGradient style={styles.button} clear={isHovered}>
                <View>
                    <ThemedText size={20} style={{fontWeight: "bold"}}>{name}</ThemedText>
                </View>
            </SurfaceGradient>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        overflow: "hidden",
    }
})