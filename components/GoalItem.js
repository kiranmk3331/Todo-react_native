import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalText }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0ecc",
    color: "white",
    padding: 8,
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
