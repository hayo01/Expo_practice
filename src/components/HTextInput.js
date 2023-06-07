import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import colors from "../constants/colors";

/**
 * @param {*} props  view, textinput
 * --> ex) 
      <HTextInput
        view={{ paddingHorizontal: 20, ... }}
        textinput={{ mode: "flat", style: { backgroundColor: "transparent", ... }, ... }}
      />
 */
const HTextInput = props => {
  const { view, textinput } = props;

  return (
    <View style={view}>
      <TextInput
        mode={"outlined"}
        activeOutlineColor={colors.orange_primary}
        style={[
          {
            backgroundColor: colors.white,
            maxHeight: 45,
            justifyContent: "center",
          },
          textinput ? textinput.style : null,
        ]}
        contentStyle={{ maxHeight: 45 }}
        outlineStyle={{ borderRadius: 8 }}
        {...textinput}
      />
    </View>
  );
};

export default HTextInput;

const styles = StyleSheet.create({});
