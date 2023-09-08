import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Goals from "./components/Goals";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentGoalCourse) => [
      ...currentGoalCourse,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <Goals courseGoals={courseGoals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
