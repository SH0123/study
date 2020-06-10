import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import { Alert } from "react-native";
import * as Location from "expo-location";
import Axios from "axios";

const API_KEY = "3af979ca6b6341157d5e5ecc6163e8ab";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async (lat, lon) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    this.setState({ isLoading: false, condition: weather[0].main, temp });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, condition, temp } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
