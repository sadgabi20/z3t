import { Slot } from 'expo-router';
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { StyleSheet, View } from 'react-native';

export default function Main() {
    return (
        <View style={style.main}>
            <Slot />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        width: 598
    }
})
