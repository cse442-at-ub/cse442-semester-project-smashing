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
import Login from "./app/loginpage"
import Register from "./app/register"

EStyleSheet.build();
var validLogin = false

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneVisible: false,
      scene: null,
      loggedin: false,
    };
    this.callbackFunction = this.callbackFunction.bind(this);
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

  callbackFunction = (loginData) => {
    console.log(loginData);
    console.log("calling callback function");      
    this.setState({loggedin: loginData})
    
    this.unMountScene();
    this.mountScene(<TableOfContents
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
    />);
  };

  render() {
    console.log(this.state.loggedin);
    if (this.state.loggedin === true){
      validLogin = true;
      console.log("CHANGING")
    } else {
      validlogin = false;
    }

    if (validLogin === true) {
      console.log("Valid Login");
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
            onRequestClose={_ => { }}
          >
            {this.state.scene}

            <BackButton onPress={this.unMountScene} />
          </Modal>

        </View>
      );
    }
    else{
      console.log("Not Valid Login");
      return (
        <View style={{ flex: 1 }}>
          <TableOfContents
            sceneVisible={this.state.sceneVisible}
            contents={{
              heading: "Smashing",
              items: [
                Login(this.mountScene, this.callbackFunction),
                Register(this.mountScene),
              ]
            }}
          />
          <Modal

            animationType={"slide"}
            transparent={false}
            visible={this.state.sceneVisible}
            onRequestClose={_ => { }}
          >
            {this.state.scene}

            <BackButton onPress={this.unMountScene} />
          </Modal>

        </View>
      );
    }
    
  }
}