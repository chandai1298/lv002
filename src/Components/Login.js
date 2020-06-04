import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {FirebaseApp as firebase} from '../Firebase/FirebaseConfig';
import Style from '../Common_Styles/Styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  // methods
  // dang ky
  register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert(
          'Alert Title',
          'Dang ky thanh cong ' + this.state.email,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => this.props.goWelcome()},
          ],
          {cancelable: false},
        );
        this.setState({
          email: '',
          password: '',
        });
      })
      .catch(function (error) {
        Alert.alert(
          'Alert Title',
          'Dang ky that bai',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('Ok pressed')},
          ],
          {cancelable: false},
        );
      });
  }
  // dang nhap
  login() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.goWelcome())
      .catch(function (error) {
        Alert.alert(
          'Alert Title',
          'Dang nhap that bai',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('Ok pressed')},
          ],
          {cancelable: false},
        );
      });
  }

  render() {
    return (
      <View style={Style.main}>
        <TextInput
          style={Style.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          style={Style.input}
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          value={this.state.password}
        />
        <View style={Style.flexRow}>
          {/* button dang nhap */}
          <TouchableOpacity style={Style.button} onPress={() => this.login()}>
            <Text>Login</Text>
          </TouchableOpacity>
          {/* button dang ky */}
          <TouchableOpacity
            style={Style.button}
            onPress={() => this.register()}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
