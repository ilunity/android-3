import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";



export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    // 'HelveticaNeue-Regular': require('./assets/fonts/HelveticaNeue-Regular.ttf'),
    // 'AirbnbCereal-Bold': require('./assets/fonts/AirbnbCereal-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
