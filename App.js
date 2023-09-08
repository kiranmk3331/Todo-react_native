import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Goals from "./components/Goals";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const modalPopHandler = () => {
    setShowModal(true);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentGoalCourse) => [
      ...currentGoalCourse,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Modal"
          color="#f31282"
          onPress={modalPopHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Goals courseGoals={courseGoals} setCourseGoals={setCourseGoals} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
