import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo";

import { connect } from 'react-redux';
import { loginUser , userMoney } from '../../redux/actions'; 

var valid;
const data = [
  { key: 'UserLabel', val: "Username", type: 'text' },
  { key: 'PassLabel', val: "Password", type: 'text' },
  { key: 'SubmitButt', val: 'Login', type: 'button' },
];
const numColumns = 1;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      Money: ''
    }
  }
  _onPressButton = () => {

    fetch('http://www-student.cse.buffalo.edu/CSE442-542/2020-spring/cse-442ad/test/user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        form: 'login',
        username: this.state.Username,
        password: this.state.Password,
      })
    })

      .then((response) => response.json())
      
      .then((response) => {
        if (response.status === "true") {
          this.props.loginUser(this.state.Username);
          alert(response.money)
          this.setState({Money:response.money})
          this.props.userMoney(this.state.Money)

          this.props.unMount();
        } else {
          alert("Invalid login info. Try again.");
        }

      })
      .done();
  }

  renderItem = ({ item }) => {
    if (item.type === "text") {
      if (item.val === "Username") {
        return (
          <View style={styles.item}>
            <TextInput
              hitSlop={{ top: 10, left: 2000, bottom: 10, right: 2000 }}
              style={{ color: "white" }}
              placeholder={item.val}
              maxLength={15}
              onChangeText={(Username) => { this.setState({ Username: Username }) }}
            />
          </View>
        )
      } else {
        return (
          <View style={styles.item}>
            <TextInput
              hitSlop={{ top: 10, left: 2000, bottom: 10, right: 2000 }}
              secureTextEntry={true}
              style={{ color: "white" }}
              placeholder={item.val}
              maxLength={25}
              onChangeText={(Password) => { this.setState({ Password: Password }) }}
            />
          </View>
        )
      }
    } else if (item.type === "label") {
      return (
        <View style={styles.label}>
          <Text style={styles.labelText}>{item.val}</Text>
        </View>
      )
    } else if (item.type === "button") {
      return (
        <View style={styles.button}>
          <TouchableOpacity
            hitSlop={{ top: 10, left: 2000, bottom: 10, right: 2000 }}
            onPress={() => { this._onPressButton() }}
          >
            <Text style={{ color: "white" }}>{item.val}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  render() {
    console.log(this.props.user);
    return (
      <LinearGradient
        colors={["#283c86", "#45a247"]}
        style={styles.linearGradient}
      >
        <React.Fragment>
          <View style={styles.margin}>
            <Text style={styles.title}>
              Login
        </Text>
          </View>
          <FlatList
            data={data}
            style={styles.container}
            renderItem={this.renderItem}
            numColumns={numColumns}
          />
        </React.Fragment>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / numColumns / 8,
  },
  itemText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: Dimensions.get('window').width / numColumns / 2, // approximate a square
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 2,
    marginBottom: 5,
    borderColor: '#DDD',
    borderRadius: 10,
    height: Dimensions.get('window').width / numColumns / 8,
  },

  labelText: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  margin: {
  },
  title: {
    marginTop: '60%',
    marginBottom: "10%",
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#fff'
  },
  linearGradient: {
    flex: 1
  },
});

const mapStateToProps = (state) => {
  const { user , money} = state;
  return {
    user,
    money
  }
}

const mapDispatchToProps = {
  loginUser,
  userMoney
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);