import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./GoalItem";

export default function Goals({ courseGoals, setCourseGoals }) {
  const deleteHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem deleteGoal={deleteHandler} goalItem={itemData.item} />
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
