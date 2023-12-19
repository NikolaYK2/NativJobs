import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {FONT, SIZES} from "@/assets/style/globalStyle";
import {checkImageUrl} from "@/common/utils/checkImageURL";
import {stylesSearch} from "@/features/search/ui/styles";

const jobImageDefault = require('@/assets/img/job/job.jpg')
type Props = {
  item: any,
  selectedJob: any
  cardPress: any
}
export const PopularJobsCard = ({item}: Props) => {

  return (
    <TouchableOpacity onPress={() => {
    }} style={stylesSearch.cardsContainer}>
      <TouchableOpacity>
        <Image source={checkImageUrl(item.employer_logo) ? {uri: item.employer_logo} : jobImageDefault}
               resizeMode={'contain'} style={stylesSearch.logoImage}/>
      </TouchableOpacity>
      <Text style={[stylesSearch.text, {marginBottom: 10}]} numberOfLines={1}>{item.employer_name}</Text>
      <View>
        <Text style={{fontFamily: FONT.bold, fontSize: SIZES.medium}} numberOfLines={1}>{item.job_title}</Text>
        <Text style={stylesSearch.text} numberOfLines={1}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};



