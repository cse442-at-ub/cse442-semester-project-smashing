import React, { Component } from 'react';
import { Text, View ,StyleSheet, Image, FlatList} from 'react-native';
import { LinearGradient } from "expo";
import Coin from "./assets/coin.gif"




const DATA = [
  {
    key: 1,
    name: 'Wallet',
    value: 323454234,
  },
  {
    key: 2,
    name: 'Todays Earnings',
    value: 469,
  },
];



export default class CalorieCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <LinearGradient 
        colors={["#4AC29A", "#BDFFF3"]}
        style={css.linearGradient}
      >
      <View style = {css.header}>
      <LinearGradient
        colors={["#4AC29A", "#BDFFF3"]}
        style={css.linearGradient2}
      >
       <Text style = {css.topfont}>Currency Counter</Text>
       </LinearGradient>
      </View>

      <LinearGradient
        colors={["#4AC29A", "#BDFFF3"]}
        style={css.linearGradient}
      >
      <FlatList
      contentContainerStyle={{flexDirection : "column"}}
      numColumns={2}
      data={DATA}
      renderItem={({item}) => (
      <View style={css.separator}>
        <Text style={css.name}>{item.name}</Text>
      </View>
      )}
      />
      </LinearGradient>

      <FlatList
      contentContainerStyle={{flexDirection : "column"}}
      numColumns={2}
      data={DATA}
      renderItem={({item}) => (
      <View style={css.separator}>
        <Text style={css.value}>{item.value}</Text>
      </View>)}/>

      <Image
        style ={css.coin} source={Coin}
      />
    

    



      
      </LinearGradient>
    );
  }
}



const css = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 23.5,
    textAlign: "center",
    color: 'blue', 
   },
   value: {
    flex: 1,
    fontSize: 22,
    textAlign: "center",
    color: 'blue',
   },
   separator: {
    flex: 2, 
    borderWidth: 3, 
    borderColor: 'green',
    textAlign: "center", 
    marginBottom: "40%",
   },
  linearGradient: {
    height: 3,
    flex: 1,
  },
  linearGradient2: {
    flex: 1,
    borderRadius: 20,
  },
  header: {
    flexBasis: 60,
    borderWidth: 3,
    borderColor: 'green',
    height: 18,
    margin: 45,
    borderRadius: 20,
  },
  topfont: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: 34,
      color: 'blue',
  },
  coin: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%"
  },  
 


});
