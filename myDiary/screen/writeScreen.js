import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class writeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>writeScreen</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0FFFF"
  }
});
