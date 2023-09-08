import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ goalItem, deleteGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoal(goalItem.id)}
        android_ripple={{ color: "#410d8a" }}
      >
        <Text style={styles.goalText}>{goalItem.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0ecc",
    color: "white",
    margin: 8,
    borderRadius: 6,
  },
  goalText: {
    color: "white",
    padding: 10,
    fontSize: 20,
  },
});
