import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FONT, globalStyle, SIZES} from "@/assets/style/globalStyle";
import {AntDesign} from "@expo/vector-icons";


type Props = {
  navigation:any,
}

const JobsTime = ['Full-time', 'Part-time', 'Contractor']

export const Welcome = ({navigation}:any) => {
  const [activeJob, setActiveJob] = useState('Full-time')

  return (
    <View style={[globalStyle.container]}>
      <View>
        <Text style={styles.text}>Hi Nikolaj</Text>
        <Text style={[styles.text,{fontFamily: FONT.bold, fontSize: SIZES.medium}]}>Find your perfect job</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput value={''} onChange={() => {
          }} placeholder={'What are you looking for?'}/>
        </View>
        <TouchableOpacity style={styles.findBtnContainer}>
          <AntDesign name="search1" size={25} color="white"/>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JobsTime}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.tabs, activeJob === item ? {...styles.tabs, opacity: 1} : {...styles.tabs}]}
              onPress={() => {
                setActiveJob(item);
                navigation.navigate(`/search/${item}`)
              }}
            >
              <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{flexDirection:'row', columnGap:10,rowGap:10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {fontFamily: FONT.medium, fontSize: SIZES.small},
  inputContainer: {flexDirection: 'row', alignItems: 'center'},
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginVertical: 10,
  },
  findBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 6,
    marginHorizontal: 5
  },
  tabsContainer: {},
  tabs: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    opacity:0.3
  }
})