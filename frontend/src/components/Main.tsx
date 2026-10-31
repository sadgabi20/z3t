import { Slot } from 'expo-router';
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { View } from 'react-native';

export default function Main() {
    return (
        <View><Slot /></View>
    )
}