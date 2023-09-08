import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const onAddGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={onAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
