import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {checkImageUrl} from "@/common/utils/checkImageURL";
import {FONT, SIZES} from "@/assets/style/globalStyle";
import {stylesSearch} from "@/features/search/ui/styles";

const jobImageDefault = require('@/assets/img/job/job.jpg')

type Props={
  job:any,
  handleNavigate:()=>void
}
export const NearbyJobsCards = ({job,handleNavigate}: Props) => {

  return (
    <TouchableOpacity onPress={() => {
    }} style={stylesSearch.cardsContainer}>
      <TouchableOpacity>
        <Image source={checkImageUrl(job.employer_logo) ? {uri: job.employer_logo} : jobImageDefault}
               resizeMode={'contain'} style={stylesSearch.logoImage}/>
      </TouchableOpacity>
      <View>
        <Text style={{fontFamily:FONT.bold, fontSize:SIZES.medium}} numberOfLines={1}>{job.job_title}</Text>
        <Text style={stylesSearch.text} numberOfLines={1}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

