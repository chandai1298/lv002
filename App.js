import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import {AuthContext} from './src/Components/LoginComponents/context';

import AsyncStorage from '@react-native-community/async-storage';
import Setting from './src/Components/Setting';
import {Style} from './src/CommonStyles';
import BottomTabMain from './src/Components/BottomTabMain';
import LoginIntro from './src/Components/LoginComponents/LoginIntro';
import Login from './src/Components/LoginComponents/Login';
import SplashScreen from './src/Components/LoginComponents/SplashScreen';
import SignInScreen from './src/Components/LoginComponents/SignInScreen';
import {IN4_USER} from './server/ConnectServer/In4User';

const Stack = createStackNavigator();
function HomeScreen({navigation}) {
  return (
    <View style={Style.container}>
      <BottomTabMain navigation={navigation} />
    </View>
  );
}
function SettingScreen({navigation}) {
  return (
    <View style={Style.container}>
      <Setting navigation={navigation} />
    </View>
  );
}

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
          //them user vao session
          const url = IN4_USER.getUser;
          fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: userName,
            }),
          })
            .then((res) => res.json())
            .then((results) => {
              AsyncStorage.setItem('user', JSON.stringify(results));
            })
            .catch((err) => {
              console.log('err', err);
            });
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.clear();
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken === null ? (
            <Stack.Navigator>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
