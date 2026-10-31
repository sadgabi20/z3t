import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, useColorScheme, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import Infobar from '@/components/Infobar';

import '@/global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />

      <SafeAreaProvider style={styles.safeAreaProvider}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            {/* Nackground image */}
            <Image
              source={require('@/assets/images/main-bg.webp')}
              style={styles.bgImg}
              resizeMode='cover'
            />

            {/* Main contents */}
            <View style={styles.content}>
              <Sidebar />

              <View style={styles.main}>
                <Main />
                <Infobar />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaProvider: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  bgImg: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});