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
const Tab = createMaterialTopTabNavigator();

const Dictionary = ({route, navigation}) => {
  // const {id_category} = route.params;
  // const idc = parseInt(JSON.stringify(id_category));
  const [loading, setLoading] = React.useState(true);
  const [input, setInput] = React.useState('');
  const [error, setErr] = React.useState('');
  const [definition, setDefinition] = React.useState([{text: ''}]);
  const [synonym, setSynonym] = React.useState([{words: ''}]);

  const dic = (word) => {
    const getDefinition =
      'https://api.wordnik.com/v4/word.json/' +
      word +
      '/definitions?limit=10&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    const getSynonym =
      'https://api.wordnik.com/v4/word.json/' +
      word +
      '/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    axios
      .all([axios.get(getDefinition), axios.get(getSynonym)])
      .then(
        axios.spread((...allData) => {
          switch (allData[0].status) {
            case 200:
              setDefinition(allData[0].data);
              setSynonym(allData[1].data);
              setLoading(false);
              break;

            default:
              setErr('Not found!');
              break;
          }
        }),
      )
      .catch((err) => {
        setErr('Clicks' + err);
        console.log(error);
      });
  };
  const Definition = () => {
    return (
      <View>
        <Text style={{fontSize: 18}}>{definition[0].text}</Text>
        {console.log(definition[0].text)}
      </View>
    );
  };

  const Synonymous = () => {
    return loading ? (
      <ActivityIndicator color="#9a9a9a" />
    ) : (
      <View style={{margin: 10}}>
        {synonym[0].words !== '' ? (
          synonym[0].words.map((item, key) => (
            <TouchableOpacity key={key}>
              <Text style={Style.text15}> {item}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View>
            <Text>hh</Text>
          </View>
        )}
        {/* <Text>{synonym[0].words}</Text> */}
      </View>
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
              placeholder="Enter something..."
              placeholderTextColor="#666666"
              style={[
                Style.input,
                {
                  color: '#9a9a9a',
                },
              ]}
              autoCapitalize="none"
              onChangeText={(val) => setInput(val)}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => (input !== '' ? dic(input) : setInput(''))}
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
