import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => (
  <Navigator>
    <Screen
      name="About"
      component={About}
      options={{
        headerTitle: () => <Header navigation={navigation} title="About" />,
        headerStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
        headerTintColor: "#444",
      }}
    />
  </Navigator>
);

export default AboutStack;
