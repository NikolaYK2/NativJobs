import {StyleSheet} from "react-native";
import {FONT, SIZES} from "@/assets/style/globalStyle";

export const stylesSearch = StyleSheet.create({
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
  cardsContainer: {
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
})