import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.half_container}>
        <MaterialCommunityIcons
          size={86}
          name="weather-lightning-rainy"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.half_container}></View>
    </View>
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
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  temp: {
    fontSize: 36,
  },

  half_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
