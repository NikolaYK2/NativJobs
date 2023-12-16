import React, {ReactNode} from 'react';
import {DimensionValue, StyleSheet, TouchableOpacity, View} from "react-native";


type Props = {
  dimension: DimensionValue,
  handlePress: () => void,
  children: ReactNode
}
export const ScreenHeaderBtn = ({dimension, children, handlePress}: Props) => {
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.btnContainer]}>
        {children}
    </TouchableOpacity>
  )
    ;
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'space-between',
    alignItems: "center",
  },
});
