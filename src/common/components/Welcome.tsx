import React from 'react';
import {Text, TextInput, View} from "react-native";
import {globalStyle} from "@/assets/style/globalStyle";
import {useFonts} from "expo-font";

export const Welcome = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('@/assets/fonts/Inter-Regular.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View style={globalStyle.container}>
        <Text style={globalStyle.userName}>Hi Nikolaj</Text>
        <Text style={{fontFamily:'Inter-Regular', fontSize:20}}>Find your perfect job</Text>
      </View>

      <View>
        <View>
          <TextInput/>
        </View>
      </View>
    </View>
  );
};

