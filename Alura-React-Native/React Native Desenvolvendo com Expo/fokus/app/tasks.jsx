import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FocusButton } from "../components/FocusButton";
import { IconPlus } from "../components/Icons";
import { TaskItem } from "../components/TaskItem";
import { useTaskContext } from "../components/context/useTaskContext";

export default function Tasks() {
  const { tasks, removeTask, toggleTaskStatus } = useTaskContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <FlatList
          data={tasks}
          style={styles.taskList}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              title={item.description}
              completed={item.completed}
              onUpdate={() => router.navigate(`/edit-task/${item.id}`)}
              onDelete={() => removeTask(item.id)}
              onToggleCompleted={() => toggleTaskStatus(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.noItems}>
                Ainda não há tarefas na sua lista, que tal adicionar?
              </Text>
            </View>
          )}
        />
        <FocusButton
          title="Adicionar nova Tarefa"
          icon={<IconPlus />}
          outline
          onPress={() => router.navigate("/create-task")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#021123",
  },
  content: {
    flex: 1,
    gap: 16,
    width: "90%",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 26,
  },
  taskList: {
    flex: 1,
  },
  noItems: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 18,
    marginTop: 40,
  },
});
