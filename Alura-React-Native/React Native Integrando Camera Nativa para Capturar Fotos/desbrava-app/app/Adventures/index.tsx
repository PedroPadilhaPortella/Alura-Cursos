import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button, Icon, Text } from "react-native-paper";

import AppHeader from "../../components/AppHeader";
import { colors } from "../../styles/colors";
import { AdventuresStackParamList } from "../_layout";
import { useAdventures } from "@/context/adventures";

const Adventures = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AdventuresStackParamList>>();

  const { adventures } = useAdventures();

  if(adventures.length == 0) {
    return (
      <>
        <AppHeader title="Minhas aventuras"/>
        <View style={styles.container}>
          <MaterialIcons name="snowboarding" size={48} color={colors.primary} />
          <Text
            variant="bodyLarge"
            style={{
              color: colors.onSurface,
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Parece que você ainda não tem aventuras registradas, mas é sempre hora
            de começar!
          </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("NewAdventure")}
            style={{ marginTop: 16, backgroundColor: colors.primary }}
            textColor={colors.black}
          >
            Adicionar aventura!
          </Button>
        </View>
      </>
    );
  }

  return (
    <>
      <AppHeader title="Minhas aventuras" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {
          adventures.map((adventure) => (
            <View key={adventure.id} style={styles.infoContainer}>
              <Text variant="bodyLarge" style={{ color: colors.onSurface }}>
                {adventure.name}
              </Text>
            </View>
          ))
        }
      </ScrollView>
      <MaterialIcons  style={styles.fab} name="add" size={32} color={colors.black} onPress={() => navigation.navigate("NewAdventure")} />
    </>
  );
};

export default Adventures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.black,
  },
  scrollContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: colors.black,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 100,
    width: 56,
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
