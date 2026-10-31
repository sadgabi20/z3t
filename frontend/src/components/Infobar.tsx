import { StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";

export default function Infobar() {
    return (
        <View style={styles.infobar}>
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
