import { Image, Keyboard, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

import HTextInput from "../../components/HTextInput";
import colors from "../../constants/colors";

const CardRegistration = ({ route }) => {
  const photoUri = route?.params?.photo ?? null;

  const cardNumberInput = { keyboardType: "numeric", maxLength: 4 };

  return (
    <TouchableWithoutFeedback
      style={{ height: "100%", backgroundColor: colors.white }}
      onPress={Keyboard.dismiss}
    >
      <ScrollView style={{ paddingHorizontal: 15 }}>
        {photoUri && (
          <Image
            source={{ uri: photoUri }}
            style={{
              width: 330,
              height: 330,
              borderRadius: 10,
              marginVertical: 15,
              resizeMode: "contain",
              overlayColor: colors.white,
            }}
          />
        )}

        {/* 회원 ID - 자동입력 */}
        <View style={{ marginTop: 15 }}>
          <Text>ID(Email)</Text>
          <HTextInput textinput={{ disabled: true, value: "support@ennovalabs.com" }} />
        </View>

        {/* 회원 이름 - 자동입력 */}
        <View style={{ marginTop: 15 }}>
          <Text>이름</Text>
          <HTextInput textinput={{ disabled: true, value: "김테스트" }} />
        </View>

        {/* 회원 카드 번호 - 직접입력 */}
        <View style={{ marginTop: 15 }}>
          <Text>카드번호</Text>
          <View style={{ flexDirection: "row", columnGap: 10, justifyContent: "space-between" }}>
            <HTextInput view={{ flex: 1 }} textinput={cardNumberInput} />
            <HTextInput
              view={{ flex: 1 }}
              textinput={{ ...cardNumberInput, secureTextEntry: true }}
            />
            <HTextInput
              view={{ flex: 1 }}
              textinput={{ ...cardNumberInput, secureTextEntry: true }}
            />
            <HTextInput view={{ flex: 1 }} textinput={cardNumberInput} />
          </View>
        </View>

        {/* 카드 유효 기간 - 직접입력 */}
        <View style={{ marginTop: 15 }}>
          <Text>유효기간</Text>
          <View style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}>
            <HTextInput
              view={{ width: "15%" }}
              textinput={{ keyboardType: "numeric", maxLength: 2 }}
            />
            <Text style={{ fontSize: 20 }}>/</Text>
            <HTextInput
              view={{ width: "15%" }}
              textinput={{ keyboardType: "numeric", maxLength: 2 }}
            />
          </View>
        </View>

        {/* 카드 CVC 번호 - 직접입력 */}
        <View style={{ marginTop: 15 }}>
          <Text>CVC</Text>
          <HTextInput
            view={{ width: "50%" }}
            textinput={{ keyboardType: "numeric", maxLength: 3 }}
          />
        </View>

        <Button
          style={{
            backgroundColor: colors.orange_primary,
            borderRadius: 10,
            marginTop: 20,
            marginBottom: 15,
            height: 45,
            justifyContent: "center",
          }}
          textColor={colors.white}
          labelStyle={{ fontSize: 16 }}
        >
          등록
        </Button>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CardRegistration;

const styles = StyleSheet.create({});
