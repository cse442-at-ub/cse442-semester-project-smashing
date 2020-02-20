import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { LinearGradient } from "expo";



export default class CalorieCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
       <Text style = {css.topfont}>Calories Counter</Text>
       </LinearGradient>
      </View>

      <View style = {css.lower}>
      <LinearGradient
        colors={["#4AC29F", "#BDFFFF"]}
        style={css.linearGradient2}
      >




        
      </LinearGradient>
      </View>

      </LinearGradient>
    );
  }
}



const css = StyleSheet.create({

  linearGradient: {
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
      fontSize: 35,
      color: 'black',
      
  },
  lower: {
    flexBasis: 375,
    borderWidth: 3,
    borderColor: 'green',
    height: 20,
    margin: 40,
    justifyContent: "center",
    borderRadius: 20,
  },


});
