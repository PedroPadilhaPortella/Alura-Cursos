import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Image } from 'expo-image';
import React, { useEffect, useRef, useState } from "react";
import { Alert, Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import AppHeader from "../../components/AppHeader";
import { AdventureViewModel } from '../../models/Adventure';
import { colors } from "../../styles/colors";
import { AdventuresStackParamList } from "../_layout";
import { useAdventures } from "@/context/adventures";

const NewAdventure = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AdventuresStackParamList>>();

  const { adventures, addAdventure } = useAdventures();

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef<CameraView>(null);

  const [form, setForm] = useState<AdventureViewModel>({
    name: "",
    description: "",
    date: "",
    image: "",
  });

  const isDisabled = form.name.length === 0;

  useEffect(() => {
    if (!!permission && !permission.granted) {
      requestPermission();
    }
  }, [permission]);

  const handleInputChange = (key: keyof AdventureViewModel, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    setForm({ ...form, image: photo?.uri });
    setIsCameraActive(false);
  };

  const handleCameraPress = async () => {
    if (!!permission && permission.status === "denied") {
      return Alert.alert(
        "Permissão Necessária",
        "Para utilizar esse recurso, você precisa permitir o acesso à câmera no seu dispositivo",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Abrir Configurações",
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
    return setIsCameraActive(true);
  };

  const navigateToAdventuresMain = () => {
    navigation.reset({ index: 0, routes: [{ name: "AdventuresMain" }] })
  }

  const handleSaveAdventure = () => {
    addAdventure({ ...form, id: (adventures.length + 1).toString()})
    navigateToAdventuresMain();
  }

  if(isCameraActive) {
    return (
      <>
          <AppHeader title="Adicionar aventura" icon="close" onPress={() => setIsCameraActive(false)} />
          <CameraView ref={cameraRef} style={styles.cameraView} mode="picture" active />
          <View style={styles.cameraViewFooter}>
            <Pressable style={styles.cameraViewFooterButton} onPress={handleTakePicture}>
              <TextInput.Icon icon="camera" size={30} color={colors.primary} onPress={handleTakePicture} />
            </Pressable>
          </View>
        </>
    );
  }

  return (
    <>
      <AppHeader title="Adicionar aventura" icon="close" onPress={() => navigateToAdventuresMain()} />
      <ScrollView style={styles.container}>
        <TextInput
          label="Nome"
          placeholder="Nome da aventura"
          value={form.name}
          onChangeText={(text) => handleInputChange("name", text)}
          style={styles.textInput}
          mode="outlined"
          outlineColor={colors.outline}
          activeOutlineColor={colors.outline}
          textColor={colors.onSurface}
        />
        <TextInput
          label="Data"
          placeholder="XX/XX/XXXX"
          value={form.date}
          onChangeText={(text) => handleInputChange("date", text)}
          style={styles.textInput}
          mode="outlined"
          outlineColor={colors.outline}
          activeOutlineColor={colors.outline}
          textColor={colors.onSurface}
          right={<TextInput.Icon icon="calendar" />}
          keyboardType="email-address"
        />
        <TextInput
          label="Descrição"
          placeholder="Descrição da aventura"
          value={form.description}
          onChangeText={(text) => handleInputChange("description", text)}
          style={styles.textInput}
          mode="outlined"
          outlineColor={colors.outline}
          activeOutlineColor={colors.outline}
          textColor={colors.onSurface}
          multiline
          numberOfLines={6}
        />
        {form.image && form.image.length > 0 ? 
          <Image source={{ uri: form.image }} contentFit="contain" style={styles.image} />
        : (
          <Pressable style={styles.cameraButton} onPress={() => handleCameraPress()}>
            <TextInput
              label="Adicone uma Imagem"
              placeholder="Adicone uma Imagem"
              style={styles.textInput}
              mode="outlined"
              outlineColor={colors.outline}
              activeOutlineColor={colors.outline}
              textColor={colors.onSurface}
              right={<TextInput.Icon icon="upload" />}
              readOnly
            />
          </Pressable>
        )}
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => handleSaveAdventure()}
            style={styles.button}
            textColor={colors.black}
            disabled={isDisabled}
          >
            Adicionar
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default NewAdventure;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: colors.black,
  },
  textInput: {
    backgroundColor: colors.surface,
  },
  image: {
    width: "100%",
    marginTop: 16,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  },
  button: {
    backgroundColor: colors.primary,
  },
  cameraButton: {
    zIndex: 10,
    height: 80,
    width: "100%",
  },
  cameraView: {
    flex: 1,
    width: "100%",
  },
  cameraViewFooter: {
    position: "absolute",
    bottom: 44,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  cameraViewFooterButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    borderWidth: 5,
    borderRadius: 45,
    borderColor: colors.primary,
  }
});
