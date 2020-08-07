import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Style, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  PowerTranslator,
  ProviderTypes,
  TranslatorConfiguration,
  TranslatorFactory,
} from 'react-native-power-translator';
import Tts from 'react-native-tts';
import axios from 'axios';
import {IN4_APP} from '../../ConnectServer/In4App';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

const Dictionary = ({route, navigation}) => {
  const [loading, setLoading] = React.useState(true);
  const [input, setInput] = React.useState('');
  const [definition, setDefinition] = React.useState([
    {
      Word: '',
      Pronounced: '',
      Type1: '',
      Content1: '',
      Type2: '',
      Content2: '',
      Type3: '',
      Content3: '',
      Type4: '',
      Content4: '',
    },
  ]);
  const [synonym, setSynonym] = React.useState([{words: ''}]);

  const dic = (word) => {
    const getDefinition = IN4_APP.getWord;
    const getSynonym =
      'https://api.wordnik.com/v4/word.json/' +
      word +
      '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    axios
      .all([
        axios.post(getDefinition, {
          word: word,
        }),
        axios.get(getSynonym),
      ])
      .then(
        axios.spread((...allData) => {
          switch (allData[0].status) {
            case 200:
              setDefinition(allData[0].data);
              setSynonym(allData[1].data);
              setLoading(false);
              setInput('');
              break;

            default:
              setErr('Not found!');
              break;
          }
        }),
      )
      .catch((err) => {
        setDefinition([{Word: `Không tìm thấy ${input}!`}]);
        setSynonym([{words: 'ko'}]);
        console.log(err);
      });
  };
  const Definition = () => {
    return definition[0].Word !== '' ? (
      <View>
        <ScrollView style={{padding: 15}}>
          <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
            {definition[0].Pronounced !== undefined ? (
              <TouchableOpacity
                style={{justifyContent: 'center'}}
                onPress={() => {
                  input === ''
                    ? Tts.getInitStatus().then(() => {
                        Tts.setDefaultLanguage('en-us');
                        Tts.speak(definition[0].Word);
                      })
                    : console.log('chua nhap');
                }}>
                <MaterialCommunityIcons
                  name="volume-high"
                  size={30}
                  style={{margin: 5}}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            <View>
              <Text
                style={[
                  {
                    fontSize: 30,
                    fontWeight: 'bold',
                  },
                ]}>
                {definition[0].Word}
              </Text>
            </View>
            <View>
              <Text style={[{fontSize: 20}]}>{definition[0].Pronounced}</Text>
            </View>
          </View>
          <Text style={[Style.text20, {marginLeft: 15}]}>
            {definition[0].Type1}
          </Text>
          <Text style={[{fontSize: 20, margin: 5}]}>
            {definition[0].Content1}
          </Text>
          <Text style={[Style.text20, {marginLeft: 15}]}>
            {definition[0].Type2}
          </Text>
          <Text style={[{fontSize: 20}]}>{definition[0].Content2}</Text>
          <Text style={[Style.text20, {marginLeft: 15}]}>
            {definition[0].Type3}
          </Text>
          <Text style={[{fontSize: 20}]}>{definition[0].Content3}</Text>
          <Text style={[Style.text20, {marginLeft: 15}]}>
            {definition[0].Type4}
          </Text>
          <Text style={[{fontSize: 20}]}>{definition[0].Content4}</Text>
        </ScrollView>
      </View>
    ) : (
      <View />
    );
  };

  const Synonymous = () => {
    return synonym[0].words !== '' ? (
      <View>
        <ScrollView style={{padding: 15}}>
          <View style={{margin: 10, flexDirection: 'row', flexWrap: 'wrap'}}>
            {synonym[0].words !== 'ko' ? (
              synonym[0].words.map((item, key) => (
                <TouchableOpacity
                  style={{marginRight: 5}}
                  key={key}
                  onPress={() => {
                    setInput(item), dic(item);
                  }}>
                  {synonym[synonym.length - 1].words === item ? (
                    <Text
                      style={{fontSize: 20, textDecorationLine: 'underline'}}>
                      {item}
                    </Text>
                  ) : (
                    <Text
                      style={{fontSize: 20, textDecorationLine: 'underline'}}>
                      {item},
                    </Text>
                  )}
                </TouchableOpacity>
              ))
            ) : (
              <View />
            )}
          </View>
        </ScrollView>
      </View>
    ) : (
      <View />
    );
  };
  return (
    <View style={Style.container}>
      <View
        style={[
          {
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TextInput
              placeholder="Hãy nhập gì đó..."
              placeholderTextColor="#666666"
              style={[
                Style.input,
                {
                  color: '#9a9a9a',
                  fontSize: 20,
                },
              ]}
              onChangeText={(val) => setInput(val)}
              defaultValue={input}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                input !== ''
                  ? dic(input.toLowerCase())
                  : setDefinition([{Word: `Không tìm thấy ${input}!`}])
              }
              style={[
                {
                  marginLeft: -50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <FontAwesome5
                name="search"
                size={DIMENSION.sizeIcon2}
                color="#754ea6"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: [Style.text18, {color: '#9a9a9a'}],
            style: {
              // borderTopColor: '#754ea6',
              // borderTopWidth: 3,
            },
          }}>
          <Tab.Screen
            name="a"
            component={Definition}
            options={{tabBarLabel: 'Định nghĩa'}}
          />
          <Tab.Screen
            name="ab"
            component={Synonymous}
            options={{tabBarLabel: 'Đồng nghĩa'}}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
export default Dictionary;
