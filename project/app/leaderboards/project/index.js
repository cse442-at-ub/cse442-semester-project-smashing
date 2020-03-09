// import React, { Component } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
// import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

// export default class leaderboards extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
//       tableData: [
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd']
//       ]
//     }
//   }

//   _alertIndex(index) {
//     Alert.alert(`This is row ${index + 1}`);
//   }

//   render() {
//     const state = this.state;
//     const element = (data, index) => (
//       <TouchableOpacity onPress={() => this._alertIndex(index)}>
//         <View style={styles.btn}>
//           <Text style={styles.btnText}>button</Text>
//         </View>

//       </TouchableOpacity>
//     );
//     return (
//       <View style={styles.container}>
//       <Table borderStyle={{borderColor: 'transparent'}}>
//         <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//         {
//           state.tableData.map((rowData, index) => (
//             <TableWrapper key={index} style={styles.row}>
//               {
//                 rowData.map((cellData, cellIndex) => (
//                   <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
//                 ))
//               }
//             </TableWrapper>
//           ))
//         }
//       </Table>
//     </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
//   head: { height: 40, backgroundColor: '#808B97' },
//   text: { margin: 6 },
//   row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
//   btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
//   btnText: { textAlign: 'center', color: '#fff' }
// });



import React, { Component } from 'react';
import { Text, Alert, View } from 'react-native';
import Leaderboard from 'react-native-leaderboard';

export default class leaderboards extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     data: [
//         {userName: 'MELEE', highScore: 52},
//         {userName: 'Jenny', highScore: 120},
//         //...
//     ] //can also be an object of objects!: data: {a:{}, b:{}}
//   }
// }
//   render() {
//     return (
//       <Leaderboard
//         data={this.state.data}
//         sortBy='highScore'
//         labelBy='userName'
//         icon = 'ishaan'
//         />
//         )
// }
// }
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
