import React, { Component } from "react";
import { View, Modal } from "react-native";
import BackButton from "./app/table-of-contents/backbutton";
import EStyleSheet from "react-native-extended-stylesheet";
import TableOfContents from "./app/table-of-contents";
import Start from "./app/start";
import LeaderBoards from "./app/leaderboards";
import FriendsList from "./app/friendslist";
import ItemShop from "./app/itemshop";
import Stats from "./app/stats";
import CalorieCounter from "./app/caloriecounter"




EStyleSheet.build();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneVisible: false,
      scene: null
    };
  }

  mountScene = scene => {
    this.setState({
      sceneVisible: true,
      scene: scene
      
    });
  };

  unMountScene = () => {
    this.setState({
      sceneVisible: false,
      scene: null
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TableOfContents
          sceneVisible={this.state.sceneVisible}
          contents={{
            heading: "Smashing",
            items: [
              Start(this.mountScene),
              LeaderBoards(this.mountScene),
	            FriendsList(this.mountScene),
              ItemShop(this.mountScene),
              Stats(this.mountScene),
              CalorieCounter(this.mountScene),
            ]
          }}
        />
        <Modal
        
          animationType={"slide"}
          transparent={false}
          visible={this.state.sceneVisible}
          onRequestClose={_ => {}}
        >
          {this.state.scene}

          <BackButton onPress={this.unMountScene} />
        </Modal>
        
      </View>
    );
  }
}