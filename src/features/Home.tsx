import React, {useCallback} from 'react';
import {Text, View} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Bold': require('@/assets/fonts/Inter-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // const router = useRouter()


  return (
    <View>
      <Text style={{fontFamily:'Inter-Bold'}}>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

