import { router } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Footer } from "../../components/Footer";
import { IconSave } from "../../components/Icons";
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
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar Tarefa</Text>
          <View style={styles.content}>
            <Text style={styles.label}>Em que você está trabalhando?</Text>
            <TextInput
              id="description"
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              numberOfLines={10}
              multiline={true}
            />
            <View style={styles.actions}>
              <Pressable style={styles.button} onPress={saveTask}>
                <IconSave />
                <Text>Salvar</Text>
              </Pressable>
            </View>
          </View>
          <Footer />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: "#021123",
  },
  container: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    backgroundColor: "#021123",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 26,
  },
  content: {
    backgroundColor: "#98A0A8",
    width: "90%",
    borderRadius: 8,
    padding: 16,
    gap: 32,
  },
  label: {
    fontWeight: 600,
    fontSize: 18,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    height: 100,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
