import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  text: {
    fontFamily: "nunito-bold"
  }
});
