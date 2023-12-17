import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {COLORS, FONT, SIZES} from "@/assets/style/globalStyle";


type Props = {
  item: any,
}
export const PopularJobsCard = ({item}: Props) => {
  return (
    <TouchableOpacity onPress={() => {
    }} style={styles.container}>
      <TouchableOpacity>
        <Image source={{uri: item.employer_logo}} resizeMode={'contain'} style={styles.logoImage}/>
      </TouchableOpacity>
      <Text style={styles.text} numberOfLines={1}>{item.employer_name}</Text>
      <View>
        <Text numberOfLines={1}>{item.job_title}</Text>
        <Text numberOfLines={1}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'flex-start',
    alignItems: "center",
    width:150
  },
  logoImage: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.gray
  }
})

