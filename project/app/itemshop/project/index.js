import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// Styles corresponding to the different views on the page
const viewStyles = StyleSheet.create({
  Header: {
    flex: 1
  },
  Body: {
    flex: 8,
    backgroundColor: "blue"
  },
  Footer: {
    flex: 1,
    backgroundColor: "red"
  }
});

const headerStyles = StyleSheet.create({
  Title:{
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
})

// Store data
const mockItemStoreData = [
  {
    id: 1,
    name: "Large Couch"
  },
  {
    id: 2,
    name: "Blue Shirt"
  },
  {
    id: 3,
    name: "Brick Wallpaper"
  },
  {
    id: 4,
    name: "Top Hat"
  },
];

export default class ItemShop extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <View style={viewStyles.Header}>
          <Text style={headerStyles.Title}>Item Shop!</Text>
        </View>

        <View style={viewStyles.Body} />
        <View style={viewStyles.Footer} />
      </View>
    );
  }

}