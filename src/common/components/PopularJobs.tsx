import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FONT, globalStyle, SIZES} from "@/assets/style/globalStyle";
import {PopularJobsCard} from "@/common/components/PopularJobsCard";


export const PopularJobs = () => {
  const isLoading = false;
  const error = false;

  return (
    <View style={globalStyle.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Popular jobs</Text>
        <TouchableOpacity>
          <Text>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={'red'}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1,2,3,4]}
            renderItem={({item})=>(
              <PopularJobsCard item={item}/>
          )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap:10, padding:10}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium
  },
  cardsContainer: {}
})