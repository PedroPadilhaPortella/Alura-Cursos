import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CityForecast } from "../../data/CityForecast";
import citiesData from "../../data/cities.json";

const cloudy = require("../../assets/images/cloudy.png");

export default function Cities() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] =
    useState<CityForecast[]>(citiesData);

  useEffect(() => {
    const searchedCities = citiesData.filter((city) =>
      city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );
    setFilteredCities(searchedCities);
  }, [search]);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <SafeAreaView style={{ flex: 1, gap: 16 }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite a cidade"
            placeholderTextColor="#FFF"
            value={search}
            onChangeText={setSearch}
          />
          <MaterialIcons name="search" size={18} color="#FFF" />
        </View>
        <ScrollView>
          <View style={styles.scrollContainer}>
            {filteredCities.map((city) => {
              return (
                <TouchableOpacity
                  key={city.cid}
                  onPress={() => router.push(`/cities/${city.cid}`)}
                  style={styles.cityContainer}
                >
                  <Image source={cloudy} style={styles.cityImage} />
                  <Text style={styles.cityLabel}>
                    {city.city.replace(", ", " - ")}
                  </Text>
                  <Text style={styles.cityTemperature}>{city.temp}°</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        {/* <FlatList
        data={citiesData}
        style={styles.citiesList}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        keyExtractor={(item) => item.cid}
        renderItem={({ item }) => (
          <View style={styles.cityContainer}>
            <Image source={cloud} style={styles.cityImage} />
            <Text style={styles.cityLabel}>{item.city_name}</Text>
            <Text style={styles.cityTemperature}>{item.condition_code}°</Text>
          </View>
        )}
      /> */}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 24,
  },
  input: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
    paddingVertical: 10,
  },
  scrollContainer: {
    gap: 16,
    paddingHorizontal: 16,
  },
  cityContainer: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  cityImage: {
    width: 32,
    height: 32,
  },
  cityLabel: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_500Medium",
  },
  cityTemperature: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
  },
});
