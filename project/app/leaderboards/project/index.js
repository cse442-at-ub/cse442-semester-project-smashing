

import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

export default class leaderboards extends Component {

state = {
  data: DATA
};

// componentDidMount() {
//   // simulate new users being added to leaderboard
//   setInterval(() => {
//     const newData = {
//       name: "New User Data!!",
//       score: Math.floor(Math.random() * 100).toString(),
//       iconUrl:
//         "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
//     };
//     this.setState({ data: this.state.data.concat(newData) });
//   }, 3000);
// }

alert = (title, body) => {
  Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
    cancelable: false
  });
};

render() {
  const props = {
    labelBy: "name",
    sortBy: "score",
    data: this.state.data,
    icon: "iconUrl",
    icon2: "l",
    onRowPress: (item, index) => {
      this.alert(item.name + " clicked", item.score + " points, wow!");
    },
    evenRowColor: "#edfcf9"
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Ghetto Header */}
      <View
        style={{
          paddingTop: 50,
          backgroundColor: "black",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
          Smashing Leaderboards
        </Text>
      </View>
      <Leaderboard {...props} />
    </View>
  );
}
}


const DATA = [
{
  name: "Tester 2",
  score: null,

},
{
  name: "Tester 1",
  score: 12,

},
{
  name: "Travis",
  score: 244,
  iconUrl: "https://img.icons8.com/office/80/000000/medal2.png",
 

},
{
  name: "Tester 3",
  score: 0,

},

{
  name: "Ishaan",
  score: 69,
  
},
{
  name: "Vikram",
  score: 101,
  iconUrl:
    "https://img.icons8.com/office/80/000000/medal-second-place.png",

},
{
  name: "Justin",
  score: 41,
},
{
  name: "Matt",
  score: 80,
  iconUrl:
    "https://img.icons8.com/office/80/000000/medal2-third-place.png",
    l: 
    "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
}

];
