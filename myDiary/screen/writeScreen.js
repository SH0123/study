import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { v1 as uuidv1 } from "uuid";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        <View style={styles.header_zone}>
          <TouchableOpacity
            style={styles.save_icon}
            activeOpacity={0.8}
            hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
            onPress={() => {
              this._saveText();
            }}
          >
            <Ionicons name="ios-arrow-back" size={30} />
            <Text>save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentCard}>
          <View style={styles.titleBox}>
            <Text style={styles.text}>제목</Text>
            <TextInput
              onChangeText={this._changeTitle}
              value={inputTitle}
              placeholder="제목을 입력하세요"
              placeholderTextColor="black"
              returnKeyType="done"
              style={styles.titleContainer}
            />
          </View>
          <View style={styles.titleBox}>
            <Text style={styles.text}>해시태그</Text>
            <TextInput
              onChangeText={this._changeTitle}
              value={inputTitle}
              placeholder="#해시태그를 입력하세요"
              placeholderTextColor="black"
              returnKeyType="done"
              style={styles.titleContainer}
            />
          </View>

          <TextInput
            onChangeText={this._changeContent}
            value={inputContent}
            placeholder="내용을 입력하세요"
            placeholderTextColor="black"
            returnKeyType="done"
            multiline={true}
            style={styles.contentsContainer}
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

  _saveText = () => {
    const { inputTitle, inputContent } = this.state;
    const { navigation } = this.props;
    if (inputTitle !== "") {
      const ID = uuidv1({ random: seed() });
      const date = this._getDate();
      const newPost = {
        id: id,
        title: inputTitle,
        content: inputContent,
        date: date
      };
      this.setState({
        inputTitle: "",
        inputContent: ""
      });
      navigation.navigate("mainScreen", { newValue: newPost });
    } else {
      navigation.navigate("mainScreen");
    }
  };

  _getDate = () => {
    let tyear = new Date().getFullYear().toString();
    let tmonth = (new Date().getMonth() + 1).toString();
    let tday = new Date().getDate().toString();

    if (tmonth < 10) {
      tmonth = "0" + tmonth;
    }
    if (tday < 10) {
      tday = "0" + tday;
    }
    return tyear + "-" + tmonth + "-" + tday;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF"
  },
  hashContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20
  },
  titleContainer: {
    flex: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 20,
    marginRight: 20
  },
  contentsContainer: {
    padding: 20,
    paddingTop: 20
  },
  contentCard: {
    flex: 6,
    backgroundColor: "white",
    margin: 10
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    flex: 1,
    marginLeft: 20
  },
  save_icon: {
    padding: 10
  },
  header_zone: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  }
});
