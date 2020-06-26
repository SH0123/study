import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import mainScreen from "./screen/mainScreen";
import detailScreen from "./screen/detailScreen";
import writeScreen from "./screen/writeScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="mainScreen"
        component={mainScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="detailScreen"
        component={detailScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

const MyNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="mainScreen"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={30} />
        }}
      />
      <Tab.Screen
        name="writeScreen"
        component={writeScreen}
        options={{
          tabBarLabel: "Write",
          tabBarIcon: () => <FontAwesome name="pencil" size={30} />
        }}
      />
    </Tab.Navigator>
  );
};

const navOptionHandler = () => ({
  headerShown: false
});

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyNav />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
