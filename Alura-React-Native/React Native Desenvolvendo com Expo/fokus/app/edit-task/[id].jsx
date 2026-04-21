import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Footer } from "../../components/Footer";
import { FormTask } from "../../components/FormTask";
import { useTaskContext } from "../../components/context/useTaskContext";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((t) => t.id == id);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setDescription(task.description);
    }
  }, [task]);

  const handleUpdateTask = () => {
    if (!description) return;
    updateTask(task.id, description);
    router.navigate("/tasks");
  };

  if (!task) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.notFound}>Tarefa não encontrada</Text>
          <Footer />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FormTask
          title="Editar Tarefa"
          value={description}
          onChange={setDescription}
          onFormSubmit={handleUpdateTask}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#021123",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notFound: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
  },
});
