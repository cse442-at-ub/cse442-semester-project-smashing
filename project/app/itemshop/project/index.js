import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";

import DescriptionModal from './DescriptionModal'

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
  ListView: {
    backgroundColor: "#C0C0C0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  ListItemName: {
    fontSize: 20
  },
  ListItemNameView: {
    flex: 2
  },
  ListItemPriceView: {
    flex: 1,
    backgroundColor: "gold",
    borderRadius: 20
  },
  ListItemPriceText: {
    textAlign: "center"
  }
});

// Store data
const mockItemStoreData = [
  {
    id: "1",
    name: "Large Couch",
    price: 900,
    description: "A large couch with multiple seat cushions."
  },
  {
    id: "2",
    name: "Blue Shirt",
    price: 20,
    description: "Blue striped shirt."
  },
  {
    id: "3",
    name: "Brick Wallpaper",
    price: 200,
    description: "Brick wallpaper to decorate the room."
  },
  {
    id: "4",
    name: "Top Hat",
    price: 1000,
    description: "A tall hat fit for a president."
  }
];

// Creates a list item from a set of props
function ListItem({ name, price, itemID, onItemClicked }) {
  return (
    <View style={bodyStyles.ListView}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={bodyStyles.ListItemNameView}>
          <TouchableOpacity
            onPress={() => {
              onItemClicked(true, itemID);
            }}
          >
            <Text style={bodyStyles.ListItemName}>{name}</Text>
          </TouchableOpacity>
        </View>
        <View style={bodyStyles.ListItemPriceView}>
          <Text style={bodyStyles.ListItemPriceText}>{price}</Text>
        </View>
      </View>
    </View>
  );
}

export default class ItemShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      selectedItemID: null
    };

    this.setModalVisibility = this.setModalVisibility.bind(this);
    this.onItemClicked = this.onItemClicked.bind(this);
  }

  /**
   * Sets the modal visibility and
   * item id.
   * 
   * @param {boolean} visible 
   * @param {string} itemID 
   */
  onItemClicked(visible, itemID){
    this.setState({modalVisible: visible, selectedItemID: itemID});
  }

  /**
   * Sets modal visibility
   * @param {boolean} visible
   */
  setModalVisibility(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { modalVisible, selectedItemID } = this.state;

    // Get the selected item
    const selectedItem = mockItemStoreData.find(element=>element.id === selectedItemID);

    return (
      <View style={{ flex: 1 }}>
        <View style={viewStyles.Header}>
          <Text style={headerStyles.Title}>Item Shop!</Text>
        </View>

        <View style={viewStyles.Body}>
          <FlatList
            data={mockItemStoreData}
            renderItem={({ item }) => (
              <ListItem
                name={item.name}
                price={item.price}
                itemID={item.id}
                onItemClicked={this.onItemClicked}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisibility(false);
          }}
        >
          <DescriptionModal description={selectedItem? selectedItem.description: null} setModalVisible={this.setModalVisibility}/>
        </Modal>

        <View style={viewStyles.Footer} />
      </View>
    );
  }
}
