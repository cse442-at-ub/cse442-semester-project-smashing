import React, { Component } from "react";

import { View, Text, Modal } from "react-native";

import BackButton from "./app/table-of-contents/backbutton";
import EStyleSheet from "react-native-extended-stylesheet";
import TableOfContents from "./app/table-of-contents";

import CalorieCounter from "./app/caloriecounter"
import FriendsList from "./app/friendslist";
import ItemShop from "./app/itemshop";
import LeaderBoards from "./app/leaderboards";
import Login from "./app/loginpage"
import Register from "./app/register"
import Start from "./app/start";
import Stats from "./app/stats";

EStyleSheet.build();

export default class App extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      loggedIn: false,
      scene: this.loggedOutView(),
    };

    this.callbackFunction = this.callbackFunction.bind(this);
    this.mountScene = this.mountScene.bind(this);
    this.unMountScene = this.unMountScene.bind(this);
  }

  mountScene = scene => {
    console.log("mounting scene");
    console.log(scene);

    this.setState({
      scene: scene
    });
  };

  unMountScene = () => {
    const {loggedIn} = this.state;

    const nextScene = loggedIn? this.loggedInView(): this.loggedOutView();
    this.mountScene(nextScene)
  };

  callbackFunction = (loginData) => {
    this.setState({loggedIn: loginData});

    // Unmount the scene to return to the table of contents
    this.unMountScene();
  };

  render() {
    const {scene} = this.state;
    return (
        <>
          {scene}
          <BackButton onPress={()=>{console.log("brain");this.unMountScene()}} />
        </>
    );
  }

  loggedInView = ()=>{
    return (
      <View style={{ flex: 1 }}>
        <TableOfContents
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
      </View>
    );
  }

  loggedOutView = ()=>{
    return (
      <View style={{ flex: 1 }}>
        <TableOfContents
          contents={{
            heading: "Smashing",
            items: [
              Login(this.mountScene, this.callbackFunction),
              Register(this.mountScene),
            ]
          }}
        />
      </View>
    );
  }
}