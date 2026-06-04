import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { colors } from "@/tokens/colors";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("@/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("@/assets/fonts/Montserrat-SemiBold.ttf"),
    "KronaOne-Regular": require("@/assets/fonts/KronaOne-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerBackTitle: "Voltar",
          headerStyle: styles.header,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.background,
  },
});
