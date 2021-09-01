import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator
    headerMode="float"
    screenOptions={{
      headerTintColor: "#444",
      headerStyle: {
        backgroundColor: "#ccc",
        height: 100,
      },
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
        headerStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    />
    <Screen
      name="Details"
      component={ReviewDetails}
      options={{
        title: "Review Details",
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    />
  </Navigator>
);

export default HomeStack;
