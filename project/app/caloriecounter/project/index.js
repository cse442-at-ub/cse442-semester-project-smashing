import React, { Component } from 'react';
import { Text, View ,FlatList ,StyleSheet} from 'react-native';
import { LinearGradient } from "expo";
import Button from 'react-bootstrap/Button';



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
      <View>
      <Text style = {css.item}>Calories Counter :</Text>
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      <Button variant="secondary" size="sm">
      Small button
      </Button>
      </View>
      </LinearGradient>
    );
  }
}



const css = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
  },
  item:{
    color: "blue",
    justifyContent: "center",
    fontSize: 32,
       
  },
});
