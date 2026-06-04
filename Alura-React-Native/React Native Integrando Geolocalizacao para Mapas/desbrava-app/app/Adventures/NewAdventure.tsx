import React, { useEffect, useRef, useState } from "react";

import { Alert, Linking, Platform, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import MapView, { Marker, Region } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { SwitchCamera } from "lucide-react-native";
import * as Location from 'expo-location';
import { Image } from 'expo-image';

import { AdventureViewModel } from '../../models/Adventure';
import { AdventuresStackParamList } from "../_layout";
import { useAdventures } from "@/context/adventures";
import AppHeader from "../../components/AppHeader";
import { colors } from "../../styles/colors";

const NewAdventure = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AdventuresStackParamList>>();

  const { adventures, addAdventure } = useAdventures();

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isMapViewActive, setIsMapViewActive] = useState(false);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [locationPermission, setLocationPermission] = useState<string | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>('back');

  const cameraRef = useRef<CameraView>(null);

  const [form, setForm] = useState<AdventureViewModel>({
    name: "",
    description: "",
    date: "",
    image: "",
    location: { address: "", latitude: 0, longitude: 0 },
  });

  const [region, setRegion] = useState<Region>({
		latitude: -23.55052,
		longitude: -46.633308,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	const [selectedLocation, setSelectedLocation] = useState<{
		latitude: number;
		longitude: number;
		address: string;
	} | null>(null);

  const isDisabled = form.name.length === 0;

  useEffect(() => {
    if (!!cameraPermission && !cameraPermission.granted) {
      requestCameraPermission();
    }
  }, [cameraPermission]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationPermission(status);
    return status === "granted";
  };

  const handleInputChange = (key: keyof AdventureViewModel, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleTakePicture = async () => {
    const photo = await cameraRef.current?.takePictureAsync();
    setForm({ ...form, image: photo?.uri });
    setIsCameraActive(false);
  };

  const handleCameraPress = async () => {
    if (!!cameraPermission && cameraPermission.status === "denied") {
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

  const toggleCameraType = () => {
    setCameraType(currentType => currentType === 'back' ? 'front' : 'back');
  };

  const searchLocation = async (query: string) => {
		try {
			const hasLocationPermission = await requestLocationPermission();

			if (!hasLocationPermission) {
				Alert.alert(
					"Permissão Necessária",
					"Para buscar uma localização, você precisa permitir o acesso à localização no seu dispositivo",
				);
				return;
			}

			const response = await Location.geocodeAsync(query);

			if (response.length > 0) {
				const { latitude, longitude } = response[0];
				setRegion({ ...region, latitude, longitude });
				const address = await Location.reverseGeocodeAsync({ latitude, longitude });

				if (address.length > 0) {
					setSelectedLocation({ latitude, longitude, address: address[0].formattedAddress! });
					setForm({ ...form, location: { address: address[0].formattedAddress!, latitude, longitude } });
				}
			}
		} catch (error) {
			console.error('Error searching location:', error);
			Alert.alert('Erro', 'Não foi possível encontrar a localização');
		}
	};

  const handleAddLocation = async () => {
    const hasLocationPermission = await requestLocationPermission();

    if (!hasLocationPermission) {
      Alert.alert(
        "Permissão Necessária",
        "Para utilizar o mapa, você precisa permitir o acesso à localização no seu dispositivo",
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
      return;
    }

    setIsMapViewActive(true);
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
          <AppHeader
            title={form.image ? "Atualizar imagem" : "Adicionar imagem"}
            icon="close"
            onPress={() => setIsCameraActive(false)}
          />
          <CameraView
            ref={cameraRef}
            style={styles.cameraView}
            mode="picture"
            active
            facing={cameraType}
          />
          <View style={styles.cameraViewFooter}>
            {/* <View style={styles.cameraControls}> */}
              <View />
              <Pressable style={styles.cameraViewFooterButton} onPress={handleTakePicture}>
                <TextInput.Icon icon="camera" size={30} color={colors.primary} onPress={handleTakePicture} />
              </Pressable>
              <Pressable style={styles.cameraViewFooterButton} onPress={toggleCameraType}>
                <SwitchCamera size={30} color={colors.primary} onPress={toggleCameraType} />
              </Pressable>
            {/* </View> */}
          </View>
        </>
    );
  }

  if (isMapViewActive) {
    return (
      <>
        <AppHeader 
          title="Localização"
          icon="close" 
          onPress={() => setIsMapViewActive(false)}
        />
        <MapView
          provider={Platform.OS === 'android' ? 'google' : undefined}
          style={styles.mapView}
          region={region}
          onRegionChangeComplete={setRegion}
          onDoublePress={(event) => {
            const { latitude, longitude } = event.nativeEvent.coordinate;
            setRegion({ ...region, latitude, longitude });
            searchLocation(`${latitude}, ${longitude}`);
          }}
          zoomEnabled
				  zoomControlEnabled
        >
          {selectedLocation && (
					<Marker
            title={selectedLocation.address}
						coordinate={{
							latitude: selectedLocation.latitude,
							longitude: selectedLocation.longitude,
						}}
					/>
				)}
        </MapView>
        <View style={styles.mapViewSearchContainer}>
          <TextInput
            label="Pesquisar"
            style={styles.mapViewSearchInput}
            textColor={colors.onSurface}
					  right={<TextInput.Icon icon='magnify' />}
            onSubmitEditing={(event) => searchLocation(event.nativeEvent.text)}
          />
        </View>
        {!!selectedLocation && (
          <View
            style={styles.mapViewConfirmContainer}
          >
            <Button
              mode='contained'
              onPress={() => setIsMapViewActive(false)}
              style={styles.mapViewConfirmButton}
              textColor={colors.black}
            >
              Confirmar Localização
            </Button>
          </View>
			  )}
      </>
    );
  }

  return (
    <>
      <AppHeader title="Adicionar aventura" icon="close" onPress={() => navigateToAdventuresMain()} />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
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
        <Pressable style={styles.cameraButton} onPress={handleAddLocation}>
          <TextInput
            label="Localização"
            placeholder="Adicionar a localização"
            value={form.location?.address}
            style={styles.textInput}
            mode="outlined" multiline
            outlineColor={colors.outline}
            activeOutlineColor={colors.outline}
            textColor={colors.onSurface}
            right={<TextInput.Icon icon="map-marker" />}
            readOnly
          />
        </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  mapView: {
    flex: 1,
    width: "100%",
  },
  mapViewSearchContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapViewSearchInput: {
    backgroundColor: colors.surface,
    marginTop: 16,
    width: '95%',
    maxWidth: 500,
  },
  mapViewConfirmContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  mapViewConfirmButton: {
    backgroundColor: colors.primary,
  }
});
