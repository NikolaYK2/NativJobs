import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "@/assets/style/globalStyle";
import {checkImageUrl} from "@/common/utils/checkImageURL";

const jobImageDefault = require('@/assets/img/job/job.jpg')
type Props = {
  item: any,
}
export const PopularJobsCard = ({item}: Props) => {

  return (
    <TouchableOpacity onPress={() => {
    }} style={styles.container}>
      <TouchableOpacity>
        <Image source={checkImageUrl(item.employer_logo) ? {uri: item.employer_logo} : jobImageDefault}
               resizeMode={'contain'} style={styles.logoImage}/>
      </TouchableOpacity>
      <Text style={[styles.text,{marginBottom:10}]} numberOfLines={1}>{item.employer_name}</Text>
      <View>
        <Text style={{fontFamily:FONT.bold, fontSize:SIZES.medium}} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.text} numberOfLines={1}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: "stretch",
    width: 140,
    marginHorizontal: 5
  },
  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray,
  }
})

