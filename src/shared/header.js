import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Header({ navigation, title }) {
  const handlePress = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name="menu"
        size={30}
        color="white"
        style={styles.icon}
        onPress={handlePress}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../../assets/heart_logo.png")}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("window").width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    marginRight: 25,
  },
  icon: {
    position: "absolute",
    left: 0,
    color: "#777",
  },
  headerTitle: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
