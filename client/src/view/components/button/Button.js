import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CustomText from "./CustomText";
import { COLORS } from "../../../util/constants";

export default function Button({
  style,
  titleStyle,
  isLoading = false,
  disabled,
  title = "",
  ...props
}) {
  const shouldDisable = !!isLoading || !!disabled;
  return (
    <TouchableOpacity
      activeOpacity={shouldDisable ? 0.6 : 0.8}
      style={[styles.container, shouldDisable && styles.disabledState, style]}
      {...props}
      disabled={shouldDisable}
    >
      {!!isLoading ? (
        <ActivityIndicator size="small" color={COLORS.black} />
      ) : (
          <CustomText bold style={[styles.title, titleStyle]}>{title}</CustomText>
        )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#11BF4E",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  disabledState: {
    opacity: 0.6
  }
});
