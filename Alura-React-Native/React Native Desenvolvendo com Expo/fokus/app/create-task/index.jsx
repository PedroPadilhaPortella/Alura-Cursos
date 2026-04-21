import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Footer } from "../../components/Footer";
import { FormTask } from "../../components/FormTask";
import { useTaskContext } from "../../components/context/useTaskContext";

export default function CreateTask() {
  const { createTask } = useTaskContext();

  const [description, setDescription] = useState("");

  const saveTask = () => {
    if (!description) return;

    createTask(description);
    setDescription("");
    router.navigate("/tasks");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FormTask
          title="Adicionar Tarefa"
          subtitle="Em que você está trabalhando?"
          value={description}
          onChange={setDescription}
          onFormSubmit={saveTask}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#021123",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
