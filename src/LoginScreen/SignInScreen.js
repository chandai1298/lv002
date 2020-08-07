import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';
import {AuthContext} from './context';
import {IN4_USER} from '../ConnectServer/In4User';
import axios from 'axios';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const {colors} = useTheme();
  const {signIn} = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const apiURL = IN4_USER.getData;
    axios
      .get(apiURL)
      .then(function (response) {
        const foundUser = response.data.filter((item) => {
          return userName == item.Username && password == item.Password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
          Alert.alert('Lỗi!', 'Tài khoản và mật khẩu không được trống.', [
            {text: 'Okay'},
          ]);
          return;
        }

        if (foundUser.length == 0) {
          Alert.alert('Invalid User!', 'Username or password is incorrect.', [
            {text: 'Okay'},
          ]);
          return;
        }
        signIn(foundUser);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={['#687ae4', '#754ea6']}>
      <StatusBar backgroundColor="#54ce04" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Đăng nhập!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: '#754ea6',
            },
          ]}>
          Tên đăng nhập
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="#754ea6" size={20} />
          <TextInput
            placeholder="Your username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
                fontSize: 16,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#754ea6" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Tên đăng nhập quá ngắn.</Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Mật khẩu
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#754ea6" size={20} />
          <TextInput
            placeholder="Your password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
                fontSize: 16,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#754ea6" size={20} />
            ) : (
              <Feather name="eye" color="#754ea6" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Mật khẩu phải dài hơn 8 ký tự!</Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text
            style={{
              color: '#754ea6',
              marginTop: 15,
              fontSize: 16,
              fontStyle: 'italic',
            }}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#687ae4', '#754ea6']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Đăng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#687ae4',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#754ea6',
                },
              ]}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
    color: '#754ea6',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
