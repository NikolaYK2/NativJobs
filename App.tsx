import {Image, StyleSheet} from 'react-native';
import {Home} from "@/features/Home";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ScreenHeaderBtn} from "@/common/components/ScreenHeaderBtn";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {images} from "@/assets/style/globalStyle";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('@/assets/fonts/Inter-Regular.otf'),
    'Inter-Medium': require('@/assets/fonts/Inter-Medium.otf'),
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

  return (
    <NavigationContainer>
      <SafeAreaProvider onLayout={onLayoutRootView} style={{paddingHorizontal:10}}>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={Home} options={{
            headerLeft: () => (
              <ScreenHeaderBtn dimension={'70%'} handlePress={() => {
              }}>
                <MaterialCommunityIcons name="hamburger" size={24} color="black"/>
              </ScreenHeaderBtn>

            ),
            headerRight: () => (
              <ScreenHeaderBtn dimension={'100%'} handlePress={() => {
              }}>
                <Image source={images.profile} style={{width: 50, height: 50, borderRadius: 10}} resizeMode={'cover'}/>
              </ScreenHeaderBtn>
            ),
            headerTitle: ''
          }}/>
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
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
