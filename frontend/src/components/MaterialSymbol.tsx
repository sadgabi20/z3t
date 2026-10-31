import { StyleSheet } from "react-native";
import ThemedText from "./ThemedText";
import { useFonts } from 'expo-font';

interface MaterialSymbolProps {
    icon: string;
    size?: number;
    weight?: number | string;
    fill?: boolean;
    opsz?: number;
    grad?: number
}

export default function MaterialSymbol({
    icon,
    size = 24,
    weight = 400,
    fill = false,
    opsz = 24,
    grad = 0
}: MaterialSymbolProps) {
    const [fontsLoaded] = useFonts({
        'MaterialSymbolsRounded': require('@/assets/fonts/MaterialSymbolsRounded.ttf'),
    });

    const fillValue = fill ? 1 : 0;
    const variationSettings = `'FILL' ${fillValue}, 'wght' ${weight}, 'GRAD' ${grad}, 'opsz' ${opsz}`;

    const styles = StyleSheet.create({
        icon: {
            fontFamily: 'MaterialSymbolsRounded',
            fontSize: size,
            fontVariationSettings: variationSettings,
        },
    });

    return (
        <ThemedText style={styles.icon}>
            {icon}
        </ThemedText>
    );
}

