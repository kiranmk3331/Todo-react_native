import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({ addGoalHandler, showModal, setShowModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const onAddGoal = () => {
    if (!enteredGoalText.trim()) {
      alert("Please Enter Name");
      return;
    } else {
      addGoalHandler(enteredGoalText);
      setEnteredGoalText("");
    }
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => setShowModal(false)}
              color="#8e4de3"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#31136B",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: "25%",
    marginHorizontal: 8,
  },
});
