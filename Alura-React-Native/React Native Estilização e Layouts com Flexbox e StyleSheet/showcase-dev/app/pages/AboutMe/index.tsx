import { ScrollView, StyleSheet, View } from "react-native";

import profile from "@/assets/configs/profile.json";
import InfoText from "@/components/InfoText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colors } from "@/tokens/colors";

export default function AboutMe() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header
          name={profile.name}
          image={require("@/assets/images/profile.png")}
        />
        <InfoText title="Sobre mim" description={profile.aboutMe} />
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  content: {
    padding: 25,
    gap: 24,
  },
});
