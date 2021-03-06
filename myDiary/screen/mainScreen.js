import * as React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import detailScreen from "./detailScreen";

export default class mainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: "",
      posts: [
        {
          id: 1,
          title: "7월 1일의 감정상태",
          hashes: ["기쁘다", "왜냐면", "치킨먹어서"],
          content: "본문",
          date: "2020-07-01"
        },
        {
          id: 2,
          title: "7월 2일의 감정상태",
          hashes: ["행복하다", "왜냐면", "풀업성공해서"],
          content: "본문",
          date: "2020-07-02"
        }
      ]
    };
  }
  render() {
    const { posts, selectedDate } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Calendar
          onDayPress={(day) => {
            this.setState({ selectedDate: day });
          }}
          current={new Date()}
        />
        <ScrollView>
          <FlatList
            data={posts.filter((data) => {
              return data.date === selectedDate.dateString;
            })}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("detailScreen", { posts: item });
                    this.setState({ selectedDate: "" });
                  }}
                >
                  <View style={styles.postContainer}>
                    <Text style={styles.textContainer}>
                      제목 : {item.title}
                    </Text>
                    <Text style={styles.textContainer}>날짜 : {item.date}</Text>
                    <Text style={styles.textContainer}>
                      {item.hashes.map((hash) => {
                        return "#" + hash + ` `;
                      })}
                    </Text>
                    <Text style={styles.textContainer}>{item.content}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={({ item, index }) => {
              return `${index}`;
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 90
  },
  postContainer: {
    paddingTop: 10
  },
  textContainer: {
    paddingTop: 5
  }
});
