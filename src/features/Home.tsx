import React from 'react';
import {ScrollView, View} from "react-native";
import {Welcome} from "@/common/components/Welcome";
import {PopularJobs} from "@/common/components/PopularJobs";
import {NearbyJobs} from "@/common/components/NearbyJobs";

export const Home = () => {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1, flexDirection:'column'}}>
        <Welcome />
        <PopularJobs/>
        <NearbyJobs/>
      </View>
    </ScrollView>

  );
};

