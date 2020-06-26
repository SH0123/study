import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import NullScreen from "./nullScreen";

export default class detailScreen extends React.Component {
  render() {
    const { route } = this.props;
    const { posts } = route.params;
    console.log(posts);

    return (
      //I have to add exception case there is no posts object
      <SafeAreaView style={styles.container}>
        {posts ? (
          <View>
            <Text>{posts.title}</Text>
            <Text>{posts.date}</Text>
            <Text>{posts.hashes}</Text>
            <Text>{posts.content}</Text>
          </View>
        ) : (
          <NullScreen />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1"
  }
});
