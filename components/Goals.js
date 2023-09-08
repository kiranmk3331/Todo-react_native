import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./GoalItem";

export default function Goals({ courseGoals }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem goalText={itemData.item.text} />;
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
  },
});
