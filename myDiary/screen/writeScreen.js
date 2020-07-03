import * as React from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { v1 as uuidv1 } from "uuid";

const seed = () => {
  const one = Math.floor((Math.random() * 100) / 3.92);
  const two = Math.floor((Math.random() * 100) / 3.92);
  const three = Math.floor((Math.random() * 100) / 3.92);
  const four = Math.floor((Math.random() * 100) / 3.92);
  const five = Math.floor((Math.random() * 100) / 3.92);
  const six = Math.floor((Math.random() * 100) / 3.92);
  const seven = Math.floor((Math.random() * 100) / 3.92);
  const eight = Math.floor((Math.random() * 100) / 3.92);
  const nine = Math.floor((Math.random() * 100) / 3.92);
  const ten = Math.floor((Math.random() * 100) / 3.92);
  const eleven = Math.floor((Math.random() * 100) / 3.92);
  const twelve = Math.floor((Math.random() * 100) / 3.92);
  const thirteen = Math.floor((Math.random() * 100) / 3.92);
  const fourteen = Math.floor((Math.random() * 100) / 3.92);
  const fifteen = Math.floor((Math.random() * 100) / 3.92);
  const sixteen = Math.floor((Math.random() * 100) / 3.92);
  return [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fifteen,
    sixteen
  ];
};
//diary data 저장하는 save 함수부터 시작해야함
const { width, height } = Dimensions.get("window");

export default class writeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: " ",
      inputContent: " "
    };
  }
  render() {
    const { inputTitle, inputContent } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentCard}>
          <TextInput
            onChangeText={this._changeTitle}
            value={inputTitle}
            placeholder="제목을 입력하세요"
            placeholderTextColor="#black"
            returnKeyType="done"
            style={styles.titleContainer}
          />
          <TextInput
            onChangeText={this._changeContent}
            value={inputContent}
            placeholder="내용을 입력하세요"
            placeholderTextColor="#black"
            returnKeyType="done"
            multiline={true}
            style={styles.contensContainer}
          />
        </View>
      </SafeAreaView>
    );
  }

  _changeTitle = (value) => {
    const { inputTitle } = this.state;
    this.setState({ inputTitle: value });
  };

  _changeContent = (value) => {
    const { inputContent } = this.state;
    this.setState({ inputContent: value });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center"
  },
  titleContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20
  },
  contensContainer: {
    padding: 20,
    paddingTop: 20
  },
  contentCard: {
    backgroundColor: "white",
    marginTop: 60,
    width: width - 30,
    height: height - 50
  }
});
