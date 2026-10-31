import { Slot } from 'expo-router';
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export default function Main() {
    const { width } = useWindowDimensions();
    const isMobile = width <= 768;

    return (
        <View style={[styles.main, isMobile && styles.mainMobile]}>
            <Slot />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        width: 598,
        minHeight: "100%",
    },
    mainMobile: {
        width: "100%",
    }
})
