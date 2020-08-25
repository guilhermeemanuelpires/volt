import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../../util/constants";

export default function CustomText({ style, bold = false, ...props }) {
  return (
    <Text style={[styles.text, !!bold && styles.bold, style]} {...props} />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: COLORS.black,
  },
});
