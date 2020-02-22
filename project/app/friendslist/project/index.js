import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';


export default class FriendsList extends Component {
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.tabView}>
            <Text style={styles.userName}>User Name</Text>
            <EvilIcons name='user' size={50} color='black' />
          </View>

          <View style={styles.friendNav}>
            <View style={styles.friendSelected}>
              <Text style={styles.friendNum}>15 Friends</Text>
            </View>
            <View style={styles.notSelected}>
              <Text style={styles.suggested}>Suggested</Text>
            </View>
          </View>

          <View style={styles.searchBarView}>
            <TextInput 
            style={styles.searchBar}
            placeholder='Search Friends' 
            />
            <EvilIcons name='search' size={45} color='black' />
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
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6E3'
  },
  userName: {
    color: 'black',
    flex: 2,
    paddingLeft: 50,
    fontWeight: 'bold',
    fontSize: 18,
  },
  friendNav: {
    alignItems: 'center',
    height: '8%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D5D5C8',
    justifyContent: 'space-evenly',

  },
  friendNum: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  suggested: {
    color: '#D5D5C8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendSelected: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  notSelected: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  searchBar: {
    fontSize: 14,
		paddingHorizontal: 8,
    paddingLeft: 30,
    alignContent: 'center',
    flex: 1,
  },
  searchBarView: {
    flexDirection: 'row',
    height: '8%',
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 10,
    marginRight: 30,
  },
});
