import {useFonts} from "expo-font";

const AvatarImage = require("@/assets/img/profile/avatar.jpg");
import {Image, StyleSheet} from 'react-native';


const COLORS = {
  primary: '',
  secondary: '',
  tertiary: '',

  gray: '',
  gray2: '',

  white: 'white',
  lightWhite: '',
}

export const FONT = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
}

export const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16
}

const icons = {
  menu: '1',
}


export const images = {
  profile: AvatarImage,
}

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal:10,
    marginVertical:10
  },
})
