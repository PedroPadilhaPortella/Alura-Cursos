import { StyleSheet, Text, View } from "react-native";

import { fontFamily, fontSize } from "@/tokens/typography";
import { colors } from "@/tokens/colors";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Desenvolvido por Alura.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.primary,
    padding: 16,
    alignItems: "center",
  },
  text: {
    fontFamily: fontFamily.montserrat.regular,
    fontSize: fontSize.body.s,
    color: colors.background,
  },
});
