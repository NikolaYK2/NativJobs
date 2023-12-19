import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import {globalStyle} from "@/assets/style/globalStyle";
import {PopularJobsCard} from "@/features/search/ui/PopularJobsCard";
import {useFetch} from "@/common/hooks/useFetch";
import {stylesSearch} from "@/features/search/ui/styles";


type DataType = {
  job_id: string
}

export const PopularJobs = () => {

  const {isLoading, error, data, refetch} = useFetch('search', {
    query: 'React developer',
    page:1,
    num_pages: 1,
  })

  const [selectedJob, setSelectedJob] =useState();

  const cardPressHandle=()=>{

  }
  return (
    <View style={globalStyle.container}>
      <View style={stylesSearch.header}>
        <Text style={stylesSearch.text}>Popular jobs</Text>
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
            data={data as DataType[]}
            renderItem={({item}) => (
              <PopularJobsCard
                item={item}
                selectedJob={selectedJob}
                cardPress={cardPressHandle}
              />
            )
            }
            keyExtractor={item => item.job_id}
            contentContainerStyle={{columnGap: 10, padding: 10}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

