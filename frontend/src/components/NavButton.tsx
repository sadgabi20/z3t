import { Pressable, StyleSheet, View } from "react-native";

import SurfaceGradient from "./SurfaceGradient";
import ThemedText from "./ThemedText";
import MaterialSymbol, { MaterialSymbolIcons } from "./MaterialSymbol";
import { useState } from "react";

interface NavButtonProps {
    name: string,
    icon?: MaterialSymbolIcons
}

export default function NavButton({ name, icon }: NavButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Pressable
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
        >
            <SurfaceGradient style={styles.button} clear={isHovered}>
                <MaterialSymbol icon={icon ?? 'help'} size={28} weight={300} opsz={48} grad={-25} />

                <View>
                    <ThemedText size={18} style={{ fontWeight: 600 }}>{name}</ThemedText>
                </View>
            </SurfaceGradient>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 12,
        overflow: "hidden",
        gap: 8
    }
})