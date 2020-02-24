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
          Leaderboards
        </Text>
      </View>
      <Leaderboard {...props} />
    </View>
  );
}
}

const DATA = [
{
  name: "Ishaan",
  score: null,
  iconUrl:
    "https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg"
},
{
  name: "Vikram",
  score: 12,
  iconUrl:
    "https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png"
},
{
  name: "Travis",
  score: 244,
  iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png"
},
{
  name: "Matt",
  score: 0,
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
},
{
  name: "Justin",
  score: 20,
  iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
},
{
  name: "Joe Roddy",
  score: 69,
  iconUrl: "https://static.witei.com/static/img/profile_pics/avatar4.png"
},
{
  name: "Ericka Johannesburg",
  score: 101,
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz"
},
{
  name: "Tim Thomas",
  score: 41,
  iconUrl: "http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png"
},
{
  name: "John Davis",
  score: 80,
  iconUrl:
    "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
},
{
  name: "Tina Turner",
  score: 22,
  iconUrl:
    "https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png"
},
{
  name: "Harry Reynolds",
  score: null,
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp"
},
{
  name: "Betty Davis",
  score: 25,
  iconUrl:
    "https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg?w=300&h=300"
},
{
  name: "Lauren Leonard",
  score: 30,
  iconUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-"
}
];
