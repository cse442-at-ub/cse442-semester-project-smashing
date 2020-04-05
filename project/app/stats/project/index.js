import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, Dimensions, Button, Alert, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const data = [
  { key: 'statLabel', val: "Stat", type: 'label' },
  { key: 'levelLabel', val: "Level", type: 'label' },
  { key: 'buttonLabel', val: "    ", type: 'label' },
  { key: 'costLabel', val: "Cost", type: 'label' },

  { key: 'HPlab', val: "HP", type: 'item' },
  { key: 'HPval', val: 1, type: 'item' },
  { key: 'HPbut', val: '+', type: 'button' },
  { key: 'HPcost', val: 1, type: 'item' },

  { key: 'STRlab', val: "STR", type: 'item' },
  { key: 'STRval', val: 1, type: 'item' },
  { key: 'STRbut', val: "+", type: 'button' },
  { key: 'STRcost', val: 1, type: 'item' },

  { key: 'AGIlab', val: "AGI", type: 'item' },
  { key: 'AGIval', val: 1, type: 'item' },
  { key: 'AGIbut', val: "+", type: 'button' },
  { key: 'AGIcost', val: 1, type: 'item' },

  { key: 'SPDlab', val: "SPD", type: 'item' },
  { key: 'SPDval', val: 1, type: 'item' },
  { key: 'SPDbut', val: "+", type: 'button' },
  { key: 'SPDcost', val: 1, type: 'item' },

  { key: 'DRNlab', val: "DRN", type: 'item' },
  { key: 'DRNval', val: 1, type: 'item' },
  { key: 'DRNbut', val: "+", type: 'button' },
  { key: 'DRNcost', val: 1, type: 'item' },

  { key: 'apply', val: "APPLY", type: 'button' },
  { key: 'reset', val: "RESET", type: 'button' },


];
const numColumns = 4;

export default class Stats extends Component {
  renderItem = ({ item }) => {
    if (item.type === "item") {
      return (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.val}</Text>
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
          <TouchableWithoutFeedback onPress={() => Alert.alert('pressed')}>
            <Text style={{color: "white"}}>{item.val}</Text>
          </TouchableWithoutFeedback>
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
              STATS
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
    height: Dimensions.get('window').width / numColumns / 2,
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
    height: Dimensions.get('window').width / numColumns / 2, // approximate a square
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
    marginTop: '15%',
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