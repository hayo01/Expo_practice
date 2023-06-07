import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/Home";
import CameraScreen from "../screens/Camera/CameraScreen";
import CardRegistration from "../screens/Camera/CardRegistration";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerBackTitle: "", headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      <Stack.Screen name="CardRegistration" component={CardRegistration} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
