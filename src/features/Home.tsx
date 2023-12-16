import React, {useCallback} from 'react';
import {ScrollView, Text, View} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {Welcome} from "@/common/components/Welcome";
import {PopularJobs} from "@/common/components/PopularJobs";
import {NearbyJobs} from "@/common/components/NearbyJobs";

export const Home = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1, flexDirection:'column'}}>
        <Welcome/>
        <PopularJobs/>
        <NearbyJobs/>
      </View>
    </ScrollView>

  );
};

