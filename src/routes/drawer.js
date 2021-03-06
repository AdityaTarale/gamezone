import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const { Navigator, Screen } = createDrawerNavigator();

const RootDrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Home" component={HomeStack} />
    <Screen name="About" component={AboutStack} />
  </Navigator>
);

export default () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);
