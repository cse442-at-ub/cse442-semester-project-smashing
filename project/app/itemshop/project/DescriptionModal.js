import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

// Views for the different components of the modal
const viewStyles = StyleSheet.create({
  Header: {},
  Body: {},
  Footer: {},
  TitleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center"
  }
});

/**
 * Modal for displaying descriptions of items.
 **/
class DescriptionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.description);
    const element = (
      <View>
        <View style={viewStyles.Header}>
          <Text style={viewStyles.TitleText}>Modal Text</Text>
          <Text style={viewStyles.TitleText}>{this.props.name}</Text>
        </View>
        <View style={viewStyles.Body}>
          <Text>Body</Text>
          <Text>{this.props.description}</Text>
        </View>
        <View style={viewStyles.Footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );

    return element;
  }
}

export default DescriptionModal;
