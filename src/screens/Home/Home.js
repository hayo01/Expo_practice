import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate("CameraScreen")}>Go to Camera</Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
