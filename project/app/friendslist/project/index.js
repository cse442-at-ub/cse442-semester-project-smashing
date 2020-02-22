import React, { Component, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { EvilIcons, Entypo } from '@expo/vector-icons';


export default class FriendsList extends Component {
  render() {

    // const [friends, setFriend] = useState([
    //   { text : 'Friend 1', key: '1' },
    //   { text : 'Friend 2', key: '2' },
    //   { text : 'Friend 3', key: '3'},
    //   { text : 'Friend 4', key: '4' },
    //   { text : 'Friend 5', key: '5' },
    //   { text : 'Friend 6', key: '6'},
    //   { text : 'Friend 7', key: '7' },
    //   { text : 'Friend 8', key: '8' },
    //   { text : 'Friend 9', key: '9'},
    //   { text : 'Friend 10', key: '10' },
    //   { text : 'Friend 11', key: '11' },
    //   { text : 'Friend 12', key: '12' },
    //   { text : 'Friend 13', key: '13' },
    //   { text : 'Friend 14', key: '14' },
    //   { text : 'Friend 15', key: '15' }
    // ]);

    return (
      <TouchableWithoutFeedback onPress={() =>{
        Keyboard.dismiss();
      }}>
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

            <ScrollView>
              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 1</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 2</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 3</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 4</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 5</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 6</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 7</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 8</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />  
                <Text>Friend 9</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 10</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 11</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 12</Text>
              </View>

              <View style={styles.friendContainer}>
                <Entypo name='user' size={50} color='black' />
                <Text>Friend 13</Text>
              </View>
            </ScrollView>
        </View>
      </TouchableWithoutFeedback>
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
  friendContainer: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'pink',
    fontSize: 20,
  }
});
