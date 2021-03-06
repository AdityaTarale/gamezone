import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { globalStyles, images } from "../../styles/global";
import Card from "../shared/card";

const ReviewDetails = ({ route, navigation }) => {
  const { title, rating, body, key } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating:</Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export default ReviewDetails;
