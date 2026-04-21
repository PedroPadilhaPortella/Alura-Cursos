import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { CityForecast } from "../../data/CityForecast";
import citiesData from "../../data/cities.json";

const cloudy = require("../../assets/images/cloudy.png");
const temperatureIcon = require("../../assets/icons/temperature.png");
const humidityIcon = require("../../assets/icons/humidity.png");

export default function CityDetails() {
  const { cityId } = useLocalSearchParams();
  const router = useRouter();

  const [cityDetails, setCityDetails] = useState<CityForecast | undefined>(
    undefined,
  );

  useEffect(() => {
    const id = Array.isArray(cityId) ? cityId[0] : cityId;

    const data = citiesData.find((c) => c.cid === id);

    if (!data) {
      router.back();
      return;
    }

    setCityDetails(data);
  }, [cityId]);

  if (!cityDetails) {
    return (
      <LinearGradient
        colors={["#00457D", "#05051F"]}
        style={styles.container}
      />
    );
  }

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <SafeAreaView
        style={{ flex: 1, gap: 16, justifyContent: "space-between" }}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.title}>
            {cityDetails?.city.replace(", ", " - ")}
          </Text>
          <View />
        </View>

        <View style={styles.weatherCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle}>Hoje</Text>
            <Text style={styles.cardHeaderTitle}>{cityDetails.date}</Text>
          </View>
          <View style={styles.cardContent}>
            <Image style={styles.weatherImage} source={cloudy} />
            <Text style={styles.weatherTemperature}>{cityDetails.temp}°</Text>
            <Text style={styles.weatherDescription}>
              {cityDetails.description}
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.cardFooterRow}>
              <View style={styles.cardFooterLabel}>
                <Image
                  source={humidityIcon}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={styles.cardFooterTitle}>Humidity:</Text>
              </View>
              <Text style={styles.cardFooterValue}>
                {cityDetails.humidity}%
              </Text>
            </View>
            <View style={styles.cardFooterRow}>
              <View style={styles.cardFooterLabel}>
                <Image
                  source={temperatureIcon}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={styles.cardFooterTitle}>Min/Max:</Text>
              </View>
              <Text style={styles.cardFooterValue}>
                {cityDetails.forecast[0].min}°C / {cityDetails.forecast[0].max}
                °C
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.forecastContainer}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              gap: 12,
            }}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToAlignment="start"
          >
            {cityDetails.forecast.map((forecast: any, index: number) => {
              return (
                <View
                  key={`${index}-${forecast.date}`}
                  style={styles.forecastItem}
                >
                  <View>
                    <Text style={styles.forecastDay}>{forecast.weekday}</Text>
                    <Text style={styles.forecastDate}>({forecast.date})</Text>
                  </View>
                  <Image source={cloudy} style={styles.forecastImage} />
                  <Text style={styles.forecastTemperature}>
                    {forecast.min}°C / {forecast.max}{" "}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
    textAlign: "center",
  },
  weatherCard: {
    width: "100%",
    backgroundColor: "#4463D5",
    borderRadius: 24,
    padding: 16,
    gap: 24,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardHeaderTitle: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  weatherImage: {
    height: 72,
    width: 72,
  },
  weatherTemperature: {
    fontSize: 42,
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
  },
  weatherDescription: {
    fontSize: 12,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
  },
  cardFooter: {
    gap: 8,
  },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooterLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardFooterTitle: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
  },
  cardFooterValue: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
  },
  forecastContainer: {},
  forecastItem: {
    alignItems: "center",
    gap: 12,
    borderRadius: 16,
    backgroundColor: "#7693FF",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  forecastDay: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFF",
    fontFamily: "Montserrat_500Medium",
  },
  forecastDate: {
    textAlign: "center",
    fontSize: 12,
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
  },
  forecastImage: {
    width: 24,
    height: 24,
  },
  forecastTemperature: {
    fontSize: 20,
    color: "#FFF",
    fontFamily: "Montserrat_600SemiBold",
  },
});
