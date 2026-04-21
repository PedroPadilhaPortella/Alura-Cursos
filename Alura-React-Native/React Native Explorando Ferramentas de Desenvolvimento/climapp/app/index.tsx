import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const climappLogo = require("../assets/images/climapp-logo.png");
const climapp = require("../assets/images/climapp.png");

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Image source={climappLogo} />
      <Image source={climapp} />
      <Text style={styles.title}>Boas-vindas!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cities")}
      >
        <Text style={styles.buttonLabel}>Entrar</Text>
        <MaterialIcons name="arrow-forward" size={24} color="#01080E" />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 25,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#7693FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    gap: 8,
  },
  buttonLabel: {
    color: "#01080E",
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
    fontWeight: "semibold",
  },
});
