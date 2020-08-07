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
import Dictionary from './src/Apps/LearningScreen/Dictionary';
import Translator from './src/Apps/LearningScreen/Translator';
import Toeic from './src/Apps/LearningScreen/Toeic';
import OnB1 from './src/Apps/LearningScreen/OnB1';
import Evaluation from './src/Apps/LearningScreen/Evaluation';
import Part from './src/Components/LearningComponents/OnB1Components/Part';
import PartDetail from './src/Components/LearningComponents/OnB1Components/PartDetail';
import Speaking from './src/Components/LearningComponents/ToeicComponents/Speaking';
import Listening from './src/Components/LearningComponents/ToeicComponents/Listening';
import Writing from './src/Components/LearningComponents/ToeicComponents/Writing';
import Reading from './src/Components/LearningComponents/ToeicComponents/Reading';
import ChangePassword from './src/Components/SettingComponents/ChangePassword';

const Stack = createStackNavigator();
function HomeScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <BottomTabMain navigation={navigation} route={route} />
    </View>
  );
}
function SettingScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Setting navigation={navigation} route={route} />
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
function SpeakingScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Speaking navigation={navigation} route={route} />
    </View>
  );
}
function ReadingScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Reading navigation={navigation} route={route} />
    </View>
  );
}
function WritingScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Writing navigation={navigation} route={route} />
    </View>
  );
}
function ListeningScreen({route, navigation}) {
  return (
    <View style={Style.container}>
      <Listening navigation={navigation} route={route} />
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
        const userName = foundUser[0].Username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
          //session user
          AsyncStorage.setItem('user', JSON.stringify(foundUser));
          let user = await AsyncStorage.getItem('user');
          let parsed = JSON.parse(user);
          showData(parsed);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          const keys = await AsyncStorage.getAllKeys();
          await AsyncStorage.multiRemove(keys);
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
  const [data, setData] = React.useState([
    {
      Id: '',
      Username: '',
      Password: '',
      Name: '',
      Email: '',
      Avatar: '1',
      RoleId: '',
      IsActive: '',
    },
  ]);

  const showData = (user) => {
    if (user !== null) {
      setData(user);
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        //get user
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        showData(parsed);

        //get token
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
                initialParams={{user: data[0]}}
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
                component={ListeningScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="toeic_speaking"
                component={SpeakingScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="toeic_reading"
                component={ReadingScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="toeic_writing"
                component={WritingScreen}
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
