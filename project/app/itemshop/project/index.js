import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity
} from "react-native";

import DescriptionModal from "./DescriptionModal";
import ShopListItem from './ShopListItem';
import PurchaseModal from "./PurchaseModal";

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

/**
 * Item Shop Page
 */
export default class ItemShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      purchaseModalVisible: false,
      selectedItemID: null
    };

    this.setModalVisibility = this.setModalVisibility.bind(this);
    this.onItemClicked = this.onItemClicked.bind(this);
    this.onItemPurchaseClicked = this.onItemPurchaseClicked.bind(this);
  }

  /**
   * Sets the modal visibility and
   * item id.
   *
   * @param {boolean} visible
   * @param {string} itemID
   */
  onItemClicked(visible, itemID) {
    this.setState({ modalVisible: visible, selectedItemID: itemID });
  }

  /**
   * Purchase for the itemID was selected.
   * 
   * @param {String} itemID 
   */
  onItemPurchaseClicked(itemID){
    console.log("Purchasing ");
    console.log(itemID);
    this.setState({purchaseModalVisible: true, selectedItemID: itemID});
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
    const selectedItem = mockItemStoreData.find(
      element => element.id === selectedItemID
    );

    return (
      <View style={{ flex: 1 }}>
        <View style={viewStyles.Header}>
          <Text style={headerStyles.Title}>Item Shop!</Text>
        </View>

        <View style={viewStyles.Body}>
          <FlatList
            data={mockItemStoreData}
            renderItem={({ item }) => (
              <ShopListItem
                name={item.name}
                price={item.price}
                itemID={item.id}
                onItemClicked={this.onItemClicked}
                onItemPurchaseClicked={this.onItemPurchaseClicked}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisibility(false);
          }}
        >
          <DescriptionModal
            name={selectedItemID ? selectedItem.name : null}
            description={selectedItem ? selectedItem.description : null}
            setModalVisible={this.setModalVisibility}
          />
        </Modal>

        <Modal
          animationType="slide"
          visible={this.state.purchaseModalVisible}
          onRequestClose={()=>{
            this.setState({purchaseModalVisible: false});
          }}
        >
            <PurchaseModal
              name={selectedItemID ? selectedItem.name: null}
              description={null}
              closeModal={()=>{this.setState({purchaseModalVisible: false})}}
            />
        </Modal>

        <View style={viewStyles.Footer} />
      </View>
    );
  }
}
