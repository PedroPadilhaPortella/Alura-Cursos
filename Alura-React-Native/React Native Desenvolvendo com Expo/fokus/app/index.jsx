import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FocusButton } from "../components/FocusButton";
import { Footer } from "../components/Footer";

const logo = require("../assets/images/logo.png");
const home = require("../assets/images/home.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.content}>
        <Text style={styles.title}>Otimize{"\n"}sua produtividade,</Text>
        <Text style={styles.subtitle}>mergulhe no que{"\n"}importa</Text>
        <Image source={home} />
        <FocusButton
          title="Quero iniciar!"
          onPress={() => router.navigate("/pomodoro")}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  content: {
    gap: 20,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
  },
  subtitle: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});
