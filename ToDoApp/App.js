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
import { v1 as uuidv1 } from "uuid";
import _ from "lodash";

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

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: "",
    LoadedToDos: false,
    toDos: {}
  };
  componentDidMount = () => {
    this._loadToDos();
  };
  render() {
    const { newToDo, LoadedToDos, toDos } = this.state;
    if (!LoadedToDos) {
      return <AppLoading />;
    }
    console.log(Object.values(toDos));
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
            onSubmitEditing={this._addToDo}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            {this._orderToDo(toDos).map((toDo) => (
              <ToDoList
                key={toDo.id}
                {...toDo}
                deleteToDos={this._deleteToDo}
                uncompleteToDo={this._uncompleteToDo}
                completeToDo={this._completeToDo}
                updateToDo={this._updateToDo}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  _orderToDo = (array) => {
    const sorted = _.sortBy(Object.values(array), "createdAt");

    return sorted;
  };

  _controlNewToDo = (text) => {
    this.setState({
      newToDo: text
    });
  };

  _loadToDos = () => {
    this.setState({
      LoadedToDos: true
    });
  };

  _addToDo = () => {
    const { newToDo } = this.state;
    if (newToDo !== "") {
      this.setState((prevState) => {
        const ID = uuidv1({ random: seed() });
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newToDo,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          newToDo: "",
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        };
        return newState;
      });
    }
  };

  _deleteToDo = (id) => {
    this.setState((prevState) => {
      const toDos = prevState.toDos;
      delete toDos[id];
      const newState = {
        ...prevState,
        toDos
      };
      return { ...newState };
    });
  };

  _uncompleteToDo = (id) => {
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: false
          }
        }
      };
      return { ...newState };
    });
  };

  _completeToDo = (id) => {
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            isCompleted: true
          }
        }
      };
      return { ...newState };
    });
  };

  _updateToDo = (id, text) => {
    this.setState((prevState) => {
      const newState = {
        ...prevState,
        toDos: {
          ...prevState.toDos,
          [id]: {
            ...prevState.toDos[id],
            text: text
          }
        }
      };
      return { ...newState };
    });
  };
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
