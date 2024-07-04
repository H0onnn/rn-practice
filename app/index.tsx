import { useState } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";

type Goal = {
  text: string;
  id: string;
};

export default function Index() {
  const [value, setValue] = useState("");
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleInputChange = (text: string) => {
    setValue(text);
  };

  const handleAddGoal = () => {
    setGoals([
      ...goals,
      {
        text: value,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={handleInputChange}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
