import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
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

import Setting from './src/Apps/Setting';
import {Style} from './src/CommonStyles';
import BottomTabMain from './src/Apps/BottomTabMain';
import {AuthContext} from './src/LoginScreen/context';
import SplashScreen from './src/LoginScreen/SplashScreen';
import SignInScreen from './src/LoginScreen/SignInScreen';
import {IN4_USER} from './server/ConnectServer/In4User';
import Player from './src/Components/SoundComponents/Player';
import Dictionary from './src/Apps/LearningScreen/Dictionary';
import Translator from './src/Apps/LearningScreen/Translator';
import Toeic from './src/Apps/LearningScreen/Toeic';
import OnB1 from './src/Apps/LearningScreen/OnB1';
import Part from './src/Components/LearningComponents/Part';
import PartDetail from './src/Components/LearningComponents/PartDetail';
import Evaluation from './src/Apps/LearningScreen/Evaluation';
import ChangePassword from './src/Components/SettingComponents/ChangePassword';
export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl:
      'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
    audioUrl:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/y2mate.com%20-%20Send%20My%20Love%20%20Sit%20Still%2C%20Look%20Pretty%20(Acoustic%20Mashup)%20-%20Landon%20Austin%20and%20Kaya%20May_T1cugr4N-dY.mp3?alt=media&token=a0251baa-cc63-4747-9246-0c8ba8e0330c',
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl:
      'http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg',
    audioUrl:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/Reality%20%20-%20%20Lost%20%20Frequencies.mp3?alt=media&token=8a8797b1-6e45-4499-bbd8-f2891400e3fb',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl:
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/y2mate.com%20-%20Send%20My%20Love%20%20Sit%20Still%2C%20Look%20Pretty%20(Acoustic%20Mashup)%20-%20Landon%20Austin%20and%20Kaya%20May_T1cugr4N-dY.mp3?alt=media&token=a0251baa-cc63-4747-9246-0c8ba8e0330c',
  },
];

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
function PlayerScreen({navigation}) {
  return (
    <View style={Style.container}>
      <Player tracks={TRACKS} />
    </View>
  );
}
function DictionaryScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Dictionary navigation={navigation} route={route} />
    </View>
  );
}
function TranslatorScreen({navigation}) {
  return (
    <View style={Style.container}>
      <Translator />
    </View>
  );
}
function ToeicScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Toeic navigation={navigation} route={route} />
    </View>
  );
}
function OnB1Screen({route, navigation}) {
  return (
    <View style={Style.container}>
      <OnB1 navigation={navigation} route={route} />
    </View>
  );
}
function PartScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Part navigation={navigation} route={route} />
    </View>
  );
}
function PartDetailScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <PartDetail navigation={navigation} route={route} />
    </View>
  );
}
function EvaluationScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Evaluation navigation={navigation} route={route} />
    </View>
  );
}
function ChangePasswordScreen({navigation}) {
  return (
    <View style={Style.container}>
      <ChangePassword navigation={navigation} />
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
              <Stack.Screen
                name="changePassword"
                component={ChangePasswordScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="dictionary"
                component={DictionaryScreen}
                options={{title: 'Từ điển Anh-Việt'}}
              />
              <Stack.Screen
                name="translator"
                component={TranslatorScreen}
                options={{title: 'Dịch văn bản'}}
              />
              <Stack.Screen
                name="onTOEIC"
                component={ToeicScreen}
                options={{title: 'TOEIC-4 kỹ năng'}}
              />
              <Stack.Screen
                name="toeic_listening"
                component={PlayerScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="onB1"
                component={OnB1Screen}
                options={{title: 'Ôn B1 ĐHNL TPHCM'}}
              />
              <Stack.Screen
                name="part"
                component={PartScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="partDetail"
                component={PartDetailScreen}
                options={{headerShown: false}}
                initialParams={{count: 0, score: 0, crown: 5, totalLength: 0}}
              />
              <Stack.Screen
                name="testEvaluation"
                component={EvaluationScreen}
                options={{headerShown: false}}
                initialParams={{count: 0, score: 0, crown: 5, totalLength: 0}}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};

export default App;
// export default App2 = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={PartDetailScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
