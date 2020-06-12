import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TextInput,
  Platform,
  ScrollView
} from "react-native";
import { AppLoading } from "expo";
import ToDoList from "./ToDo";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: "",
    LoadedToDos: false
  };
  componentDidMount = () => {
    this._loadToDos();
  };
  render() {
    const { newToDo, LoadedToDos } = this.state;
    /*if (!LoadedToDos) {
      return <AppLoading />;
    }*/
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>ToDo List</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"What to do"}
            value={newToDo}
            onChangeText={this._controlNewToDo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDoList text={"Hello I'm a To Do"} />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controlNewToDo = (text) => {
    this.setState({
      newToDo: text
    });
  };

  _loadToDos = () => {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center" //교차 축 정렬
    //justifyContent: "center" //진행 축 정렬
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "200",
    marginTop: 40,
    marginBottom: 20
  },
  card: {
    backgroundColor: "white",
    width: width - 25,
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      // ...Will hide the ios 'something' code if the app is being executed on Android and vice versa, we use it to write different code for both platforms!
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5, //그림자의 불투명도: 1이 제일 불투명
        shadowRadius: 5, //그림자의 크기
        shadowOffset: {
          //그림자의 시작 위치
          height: -1,
          width: 0 //text or box의 offset보다 height는 -1인 위치, width는 제 자리에 위치한다?
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    padding: 20,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
});
