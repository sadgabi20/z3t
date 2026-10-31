import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, useColorScheme, View, Image, useWindowDimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import Infobar from '@/components/Infobar';

import '@/global.css';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 768;

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />

      <SafeAreaProvider style={styles.safeAreaProvider}>
        <SafeAreaView style={styles.safeArea}>
          <LinearGradient
            colors={["#15071F", "#15071F", "#090512"]}
            locations={[0, 0.5, 1]}
            start={{ x: 0.25, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.container}
          >
            {/* Background image */}
            {isMobile && <Image
              source={require('@/assets/images/main-bg.png')}
              style={styles.bgImg}
              resizeMode='cover'
            />}

            {/* Main contents */}
            <View style={styles.content}>
              <Sidebar />

              <View style={styles.main}>
                <Main />
                <Infobar />
              </View>
            </View>
          </LinearGradient>
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
  },
  main: {
    flex: 1,
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    alignSelf: "flex-start",
  },
  bgImg: {
    opacity: 0.65,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});