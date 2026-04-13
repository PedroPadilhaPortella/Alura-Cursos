import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

export const TaskItem = ({
  completed,
  title,
  onToggleCompleted,
  onUpdate,
  onDelete,
}) => {
  return (
    <View style={[styles.taskItem, completed && styles.taskItemCompleted]}>
      <Pressable onPress={onToggleCompleted}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onUpdate}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onDelete}>
        <IconTrash />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    backgroundColor: "#98A0A8",
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
  },
  taskItemCompleted: {
    backgroundColor: "#0F725C",
  },
  title: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "bold",
  },
});
