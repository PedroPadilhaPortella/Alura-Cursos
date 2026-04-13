import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ caption, isActive, onActionButtonPress }) => {
  return (
    <Pressable
      style={[isActive && styles.actionButtonActive]}
      onPress={onActionButtonPress}
    >
      <Text style={styles.actionButton}>{caption}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    fontSize: 14,
    color: "#FFF",
    padding: 8,
  },
  actionButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});