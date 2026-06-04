import { router } from "expo-router";
import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";

import SocialButton, { SocialNetworks } from "@/components/SocialButton";
import { fontFamily, fontSize, lineHeight } from "@/tokens/typography";
import PrimaryButton from "@/components/PrimaryButton";
import profile from "@/assets/configs/profile.json";
import InfoText from "@/components/InfoText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { colors } from "@/tokens/colors";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Header
          name={profile.name}
          image={require("@/assets/images/profile.png")}
        />

        <InfoText
          title="Eleve seu negócio digital a outro nível"
          highlightTitle="com qualidade!"
          description={profile.summary}
        />
        <PrimaryButton
          title="Sobre mim"
          onPress={() => router.push("/pages/AboutMe")}
        />
        <PrimaryButton
          title="Entre em Contato"
          onPress={() => Linking.openURL(`tel:${profile.phone}`)}
        />

        <Text style={styles.text}>Acesse minhas redes:</Text>

        <SocialButton
          socialNetwork={SocialNetworks.github}
          onPress={() => Linking.openURL(profile.github)}
        />
        <SocialButton
          socialNetwork={SocialNetworks.linkedin}
          onPress={() => Linking.openURL(profile.linkedin)}
        />
        <SocialButton
          socialNetwork={SocialNetworks.instagram}
          onPress={() => Linking.openURL(profile.instagram)}
        />
        <SocialButton
          socialNetwork={SocialNetworks.twitch}
          onPress={() => Linking.openURL(profile.twitch)}
        />
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
    paddingHorizontal: 24,
    gap: 24,
  },
  text: {
    fontFamily: fontFamily.kronaOne.regular,
    fontSize: fontSize.body.l,
    color: colors.onBackground,
    alignSelf: "center",
    lineHeight: fontSize.headings.h4 * lineHeight.body,
    paddingTop: 24,
    paddingBottom: 8,
  },
});
