import { Slot } from 'expo-router';
import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function Main() {
    return (
        <main><Slot /></main>
    )
}