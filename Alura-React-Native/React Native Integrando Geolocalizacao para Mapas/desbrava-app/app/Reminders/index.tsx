import { FontAwesome5, Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import AppHeader from "../../components/AppHeader";
import { colors } from "../../styles/colors";

const Notifications = () => {
  return (
    <>
      <AppHeader title="Lembretes" />
      <View style={styles.container}>
        <Octicons name="bell" size={48} color={colors.primary} />
        <Text
          variant="bodyLarge"
          style={{
            color: colors.onSurface,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Você ainda não tem lembretes registrados
        </Text>
        <Button
          mode="contained"
          onPress={() => {}}
          style={{
            marginTop: 16,
            backgroundColor: colors.primary,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          textColor={colors.black}
        >
          <FontAwesome5 name="plus" size={14} color={colors.black} />
          Adicionar lembrete
        </Button>
      </View>
    </>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
});
