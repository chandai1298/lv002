import React, {Component, useEffect} from 'react';
import {
  PowerTranslator,
  ProviderTypes,
  TranslatorConfiguration,
  TranslatorFactory,
} from 'react-native-power-translator';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Text,
  Image,
} from 'react-native';
import Tts from 'react-native-tts';
import Languages from '../../Assets/txt/languages.json';
import SpeechAndroid from 'react-native-android-voice';
import {Picker} from '@react-native-community/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Style, DIMENSION} from '../../CommonStyles';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Translator = () => {
  const [languageTo, setLanguageTo] = React.useState('en');
  const [languageCode, setLanguageCode] = React.useState('en');
  const [micOn, setMicOn] = React.useState(false);
  const [inputText, onChangeInputText] = React.useState('');
  const [outputText, onChangeOutputText] = React.useState('');

  useEffect(() => {
    TranslatorConfiguration.setConfig(
      ProviderTypes.Google,
      'AIzaSyBTXr7MqVz0OXJadyLXaKPkLIf2ik3hukk',
      languageCode,
    );
  });

  const translate = () => {
    try {
      const translator = TranslatorFactory.createTranslator();
      translator.translate(inputText).then((translated) => {
        onChangeOutputText(translated);
      });
    } catch (error) {}
  };

  const _OnMic = async () => {
    await setMicOn(true);
    try {
      var spokenText = await SpeechAndroid.startSpeech(
        '',
        SpeechAndroid.DEFAULT,
      );
      await onChangeInputText(spokenText);
      await ToastAndroid.show(spokenText, ToastAndroid.LONG);
    } catch (error) {
      switch (error) {
        case SpeechAndroid.E_VOICE_CANCELLED:
          ToastAndroid.show('Voice Recognizer cancelled', ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_NO_MATCH:
          ToastAndroid.show('No match for what you said', ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_SERVER_ERROR:
          ToastAndroid.show('Google Server Error', ToastAndroid.LONG);
          break;
      }
    }
    setMicOn(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View style={{flexDirection: 'row-reverse'}}>
          <FontAwesome5
            name="times"
            size={DIMENSION.sizeIcon}
            color="#ababab"
            onPress={() => onChangeInputText('')}
          />
        </View>
        <TextInput
          style={{flex: 1, height: 80, fontSize: 18}}
          placeholder="Enter something..."
          underlineColorAndroid="transparent"
          onChangeText={(inputText) => onChangeInputText(inputText)}
          value={inputText}
          multiline={true}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => _OnMic()}>
            {micOn ? (
              <MaterialCommunityIcons
                size={30}
                name="microphone-outline"
                style={styles.ImageStyle}
              />
            ) : (
              <MaterialCommunityIcons
                size={30}
                name="microphone-off"
                style={styles.ImageStyle}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => {
              inputText !== ''
                ? Tts.getInitStatus().then(() => {
                    Tts.setDefaultLanguage('en-us');
                    Tts.speak(inputText);
                  })
                : console.log('chua co input');
            }}>
            <MaterialCommunityIcons
              name="volume-high"
              size={30}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          {flexDirection: 'row', height: 50, flex: 2, marginTop: 5},
          Style.coverCenter,
        ]}>
        <TouchableOpacity
          style={[
            Style.boxShadow,
            {
              borderRadius: 20,
              width: '40%',
              height: '80%',
              marginRight: 10,
            },
          ]}
          onPress={() => {
            setLanguageTo('vi'), setLanguageCode('vi');
          }}>
          <LinearGradient
            style={[
              {
                width: '100%',
                height: '100%',
                borderRadius: 20,
              },
              Style.coverCenter,
            ]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#687ae4', '#754ea6']}>
            <Text style={[Style.text18, Style.textColore6e6f6]}>
              Anh - Việt
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            Style.boxShadow,
            {
              borderRadius: 20,
              width: '40%',
              height: '80%',
            },
          ]}
          onPress={() => {
            setLanguageTo('en'), setLanguageCode('en');
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#687ae4', '#754ea6']}
            style={[
              {
                width: '100%',
                height: '100%',
                borderRadius: 20,
              },
              Style.coverCenter,
            ]}>
            <Text style={[Style.text18, Style.textColore6e6f6]}>
              Việt - Anh
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Picker
        style={{flex: 1}}
        selectedValue={languageTo}
        onValueChange={(lang) => {
          setLanguageTo(lang),
            setLanguageCode(lang),
            console.log(languageTo + ', ' + languageCode);
        }}>
        {Object.keys(Languages).map((key) => (
          <Picker.Item
            key={key}
            label={'Auto Detect - ' + Languages[key]}
            value={key}
          />
        ))}
      </Picker>

      {translate()}

      <View style={[styles.input, {marginBottom: 150}]}>
        <View
          style={{
            flex: 1,
            fontSize: 18,
          }}>
          <TextInput
            style={{
              fontSize: 18,
            }}
            value={outputText}
            multiline={true}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              outputText !== ''
                ? Tts.getInitStatus().then(() => {
                    Tts.setDefaultLanguage('vi-us');
                    Tts.speak(outputText);
                  })
                : console.log('chua co output');
            }}>
            <MaterialCommunityIcons
              name="volume-high"
              size={30}
              style={styles.ImageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Translator;
const styles = StyleSheet.create({
  container: {
    flex: 13,
    padding: 15,
  },
  input: {
    flex: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#754ea6',
    borderRadius: 5,
    height: 200,
    shadowRadius: 20,
    shadowOpacity: 0.5,
    elevation: 6,
  },

  ImageStyle: {
    marginLeft: 5,
    marginBottom: 5,
    marginRight: 10,
  },
});
