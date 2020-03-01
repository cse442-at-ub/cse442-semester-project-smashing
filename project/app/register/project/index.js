import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text,TextInput, Dimensions, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo";

const data = [
  { key: 'UserLabel', val: "Username", type: 'text' },
  { key: 'PassLabel', val: "Password", type: 'text' },
  { key: 'PassConfLabel', val: "Confirm Password", type: 'text' },
  { key: 'SubmitButt', val: 'Create Account', type: 'button' },
];
const numColumns = 1;

export default class Login extends Component {
  renderItem = ({ item }) => {
    if (item.type === "text") {
      return (
        <View style={styles.item}>
        <TextInput 
      style={{color: "white"}}
      placeholder={item.val}
      maxLength={20}
      />
        </View>
      )
    } else if (item.type === "label") {
      return (
        <View style={styles.label}>
          <Text style={styles.labelText}>{item.val}</Text>
        </View>
      )
    } else if (item.type === "button") {
      return (
        <View style={styles.button}>
          <TouchableOpacity 
          hitSlop={{top: 10, left: 2000, bottom: 10, right: 2000}}
          onPress={() => Alert.alert('pwned')}
          >
            <Text style={{color: "white"}}>{item.val}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  render() {
    return (
      <LinearGradient
        colors={["#283c86", "#45a247"]}
        style={styles.linearGradient}
      >
        <React.Fragment>
          <View style={styles.margin}>
            <Text style={styles.title}>
            Create Account 
        </Text>
          </View>
            <FlatList
              data={data}
              style={styles.container}
              renderItem={this.renderItem}
              numColumns={numColumns}
            />
        </React.Fragment>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / numColumns / 8,
  },
  itemText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / numColumns / 2, // approximate a square
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    marginBottom: 5,
    borderColor: '#DDD',
    borderRadius: 10,
    height: Dimensions.get('window').width / numColumns / 8,
  },

  labelText: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  margin: {
  },
  title: {
    marginTop: '60%',
    marginBottom: "10%",
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#fff'
  },
  linearGradient: {
    flex: 1
  },
});