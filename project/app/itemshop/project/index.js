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
  ListItemName:{
    fontSize: 20,
    flex: 2
  },
  ListItemPriceView:{
    flex: 1,
    backgroundColor: "gold"
  },
  ListItemPriceText:{
    textAlign: "center"
  }

})

// Store data
const mockItemStoreData = [
  {
    id: "1",
    name: "Large Couch",
    price: 900,
  },
  {
    id: "2",
    name: "Blue Shirt",
    price: 20,
  },
  {
    id: "3",
    name: "Brick Wallpaper",
    price: 200,
  },
  {
    id: "4",
    name: "Top Hat",
    price: 1000,
  }
];

// Creates a list item from a set of props
function ListItem({name, price}) {
  return (
    <View style={bodyStyles.ListView}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <Text style={bodyStyles.ListItemName}>
          {name}
        </Text>
        <View style={bodyStyles.ListItemPriceView}>
          <Text style={bodyStyles.ListItemPriceText}>
            {price}
          </Text>
        </View>
      </View>
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
              <ListItem name={item.name} price={item.price} />
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
