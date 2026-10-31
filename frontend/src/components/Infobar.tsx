import { StyleSheet, View, useWindowDimensions } from "react-native";
import ThemedText from "./ThemedText";

export default function Infobar() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;

    return (
        <View style={[styles.infobar, isMobile && { display: "none" }]}>
            <ThemedText>Infobar</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    infobar: {
        gap: 16,
        marginRight: 70,
        width: 350,
    }
})
