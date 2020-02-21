import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

// Styles corresponding to the different views on the page
const viewStyles = StyleSheet.create({
  Header: {
    flex: 1
  },
  Body: {
    flex: 8
  },
  Footer: {
    flex: 1,
    backgroundColor: "red"
  }
});

const headerStyles = StyleSheet.create({
  Title: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const bodyStyles = StyleSheet.create({
  ListView:{
    backgroundColor: "#C0C0C0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  ListText:{
    textAlign: "center",
    fontSize: 20,
  }
})

// Store data
const mockItemStoreData = [
  {
    id: "1",
    name: "Large Couch"
  },
  {
    id: "2",
    name: "Blue Shirt"
  },
  {
    id: "3",
    name: "Brick Wallpaper"
  },
  {
    id: "4",
    name: "Top Hat"
  }
];

// Creates a list item from a set of props
function ListItem({name}) {
  return (
    <View style={bodyStyles.ListView}>
      <Text style={bodyStyles.ListText}>{name}</Text>
    </View>
  );
}

export default class ItemShop extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={viewStyles.Header}>
          <Text style={headerStyles.Title}>Item Shop!</Text>
        </View>

        <View style={viewStyles.Body}>
          <FlatList
            data={mockItemStoreData}
            renderItem={({item}) => 
              <ListItem name={item.name} />
            }
            keyExtractor={item =>
              item.id
            }
          />
        </View>

        <View style={viewStyles.Footer} />
      </View>
    );
  }
}
