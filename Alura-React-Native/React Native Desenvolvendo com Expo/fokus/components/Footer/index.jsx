import { StyleSheet, Text, View } from "react-native";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.credits}>Desenvolvido por Pedro Portella</Text>
      <Text style={styles.credits}>em parceira com Alura</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  credits: {
    textAlign: "center",
    fontSize: 12,
    color: "#98A0A8",
  },
});
