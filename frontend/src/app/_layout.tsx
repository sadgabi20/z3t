import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import Infobar from '@/components/Infobar';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <div style={styles.root}>
        <Sidebar />
        <div style={styles.main}>
          <Main />
          <Infobar />
        </div>
      </div>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  main: {
    display: "flex",
    gap: "1rem"
  }
})