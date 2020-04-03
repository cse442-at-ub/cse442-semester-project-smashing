import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList, Fragment } from 'react-native';
import { LinearGradient } from "expo";
import Coin from "./assets/coin.gif"
import { Runner } from 'matter-js';

import { connect } from "react-redux";



const DATA = [
  {
    key: 'Money',
    name: 'Wallet',
    value: '',
  },
  {
    key: "Money",
    name: 'Todays',
    value: 1234,
  },
  {
    key: "Money",
    name: 'Test',
    value: 1234,
  },
];



class CalorieCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wallet: '',
      Todays: 5,
      Username: '',
    };
  }



  async componentDidMount() {
  
  const headers = { 'Content-Type': 'application/json' }
  const response = await fetch('http://www-student.cse.buffalo.edu/CSE442-542/2020-spring/cse-442ad/test/user.php', {headers})
  const data = await response.json();
    this.setState({ Wallet: data.money })
    alert(data.money)
  }

renderItem = ({ item }) => {

  if (item.name == "Wallet") {
    return (
      <React.Fragment>
        <View style={css.separator}>
          <Text style={css.name}>{item.name}</Text>
        </View>
        <View style={css.separator}>
          <Text
            style={css.name}
            numColumns={2}
          >{this.props.user}</Text>
        </View>
      </React.Fragment>
    )
  }
  else if (item.name == "Todays") {
    return (
      <React.Fragment>
        <View style={css.separator}>
          <Text style={css.name}>{item.name}</Text>
        </View>
        <View style={css.separator}>
          <Text
            style={css.name}
            numColumns={2}
          >{this.state.Todays}</Text>
        </View>
      </React.Fragment>
    )
  }

}
render() {
  return (
    <React.Fragment>
      <LinearGradient
        colors={["#283c86", "#45a247"]}
        style={css.linearGradient}
      >
        <View style={css.header}>
          <Text style={css.topfont}>Currency Counter</Text>
          <Text style={css.topfont}>{this.props.user.username}</Text>
        </View>
        <FlatList
          data={DATA}
          contentContainerStyle={{ flexDirection: "column" }}
          renderItem={this.renderItem}
          numColumns={2}
        />
        <Image style={css.coin} source={Coin} />
      </LinearGradient>
    </React.Fragment>
  );
}
}



const css = StyleSheet.create({
  name: {
    flex: 1,
    fontSize: 23.5,
    textAlign: "center",
    color: 'white',
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
    borderColor: 'black',
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
    borderColor: 'black',
    height: 26,
    margin: 45,
    borderRadius: 26,
  },
  topfont: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 34,
    color: 'white',
  },
  coin: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%"
  },



});

const mapStateToProps = (state) => {
  const { user, money } = state;
  return {
    user,
    money
  };
}

export default connect(mapStateToProps, null)(CalorieCounter);