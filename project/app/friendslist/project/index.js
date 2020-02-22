import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class FriendsList extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.tabView}>
          <Text style={styles.userName}>User Name</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    color: 'black',
    backgroundColor: 'white',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userName: {
    color: 'black',
    flex: 2,
    paddingLeft: 50,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
