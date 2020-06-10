import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Haze",
    subtitle: "Don't go outside"
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#20002c", "#cbb4d4"],
    title: "Thunderstorm",
    subtitle: "Be careful"
  },
  Drizzle: {
    iconName: "weather-hurricane",
    gradient: ["#000000", "#0f9b0f"],
    title: "Drizzle",
    subtitle: "Don't go outside"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#200122", "#6f0000"],
    title: "Rain",
    subtitle: "Don't go outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Snow",
    subtitle:
      "When you catch the snow, you can fall in love with your first lover"
  },
  Atmosphere: {
    iconName: "weather-sunset",
    gradient: ["#108dc7", "#ef8e38"],
    title: "Atmosphere",
    subtitle: "Don't go outside"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#11998e", "#38ef7d"],
    title: "Clear",
    subtitle: "play outside"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#44A08D", "#c2c2c2"],
    title: "Clouds",
    subtitle: "Hang out with umbrella"
  },
  Dust: {
    iconName: "weather-pouring",
    gradient: ["#FC5C7D", "#6A82FB"],
    title: "Dust",
    subtitle: "Don't go outside"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Mist",
    subtitle: "Don't go outside"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half_container}>
        <MaterialCommunityIcons
          size={86}
          name={weatherOptions[condition].iconName}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.half_container, ...styles.text_container }}>
        <Text style={styles.Title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.SubTitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Dust",
    "Haze",
    "Mist"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  temp: {
    fontSize: 36,
    color: "white"
  },

  half_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text_container: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  },

  Title: {
    fontSize: 42,
    fontWeight: "100",
    color: "white",
    marginBottom: 10
  },

  SubTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "white"
  }
});
