import React, { Component } from "react";

import { View } from "react-native";

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

export default class AppMain extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      isMenu: true,
      loggedIn: false,
      registered: false,
      scene: this.loggedOutView(),
    };
    
    this.callbackFunction = this.callbackFunction.bind(this);
    this.mountScene = this.mountScene.bind(this);
    this.unMountScene = this.unMountScene.bind(this);
  }

  /**
   * Mount's a new scene
   * 
   * This function should not be called when rendering a menu. Since we are not expecting
   * a menu, we set the isMenu flag to be false. This flag is used to render a back button.
   */
  mountScene = scene => {
    this.setState({
      scene: scene,
      isMenu: false,
    });
  };

  /**
   * Un-mount's the current scene
   * 
   * When un-mounting, we render the menu page. Since there are two menus,
   * we need to figure out which menu to render through the logged in state variable.
   * 
   * We also set the isMenu flag to true, that way the back button does not render.
   */
  unMountScene = () => {
    const {loggedIn} = this.state;

    // If we are logged in, render the logged in view, otherwise the logged out view
    const nextScene = loggedIn? this.loggedInView(): this.loggedOutView();

    this.setState({
      scene: nextScene,
      isMenu: true,
    });
  };

  callbackFunctionRegistered = (regdata) => {
    this.setState({registered: regdata});
    //this.setState({loggedIn: true}); // keep this to send to game || erase this to send back to login menu 
    // Un-mount the scene to return to the table of contents
    this.unMountScene();
  };


  callbackFunction = (loginData) => {
    this.setState({loggedIn: loginData});

    // Un-mount the scene to return to the table of contents
    this.unMountScene();
  };

  render() {
    const { scene, isMenu } = this.state;
    
    const backButton = (<BackButton onPress={this.unMountScene} />);
    
    return (
        <>
          {scene}
          {isMenu? null: backButton}
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
              Register(this.mountScene, this.callbackFunctionRegistered),
            ]
          }}
        />
      </View>
    );
  }
}