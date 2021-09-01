import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./src/routes/drawer";
import { createDrawerNavigator } from "@react-navigation/drawer";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
}
