import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { IconSave } from "../../components/Icons";

export const FormTask = ({
  title,
  subtitle,
  value,
  onChange,
  onFormSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        {subtitle && <Text style={styles.label}>{subtitle}</Text>}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange}
          numberOfLines={10}
          multiline={true}
        />
        <View style={styles.actions}>
          <Pressable style={styles.button} onPress={onFormSubmit}>
            <IconSave />
            <Text>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    width: "100%",
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
    textAlignVertical: "top",
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
