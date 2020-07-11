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
  TouchableHighlight,
  ToastAndroid,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Tts from 'react-native-tts';
import Languages from '../../Assets/txt/languages.json';
import SpeechAndroid from 'react-native-android-voice';
import {Picker} from '@react-native-community/picker';

const Translator = () => {
  const [languageTo, setLanguageTo] = React.useState('');
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

  // const handleTranslate = () => {
  //   const translator = TranslatorFactory.createTranslator();
  //   translator.translate(inputText).then((translated) => {
  //     Tts.getInitStatus().then(() => {
  //       Tts.speak(translated);
  //     });
  //     Tts.stop();
  //   });
  // };
  const translate = () => {
    const translator = TranslatorFactory.createTranslator();
    translator.translate(inputText).then((translated) => {
      onChangeOutputText(translated);
    });
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
        <TextInput
          style={{flex: 1, height: 80}}
          placeholder="Enter Text"
          underlineColorAndroid="transparent"
          onChangeText={(inputText) =>
            onChangeInputText(inputText, translate())
          }
          value={inputText}
        />
        <TouchableOpacity onPress={() => _OnMic()}>
          {micOn ? (
            <Icon size={30} name="md-mic" style={styles.ImageStyle} />
          ) : (
            <Icon size={30} name="md-mic-off" style={styles.ImageStyle} />
          )}
        </TouchableOpacity>
      </View>

      <Picker
        selectedValue={languageTo}
        onValueChange={(lang) => {
          setLanguageTo(lang), setLanguageCode(lang);
        }}>
        {Object.keys(Languages).map((key) => (
          <Picker.Item key={key} label={Languages[key]} value={key} />
        ))}
      </Picker>

      <View style={styles.output}>
        {/* onTranslationEnd={this.textToSpeech} */}
        <Text>{outputText}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleTranslate()}>
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity> */}
    </View>
  );
};
export default Translator;
const styles = StyleSheet.create({
  container: {
    paddingTop: 53,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    // height: 40,
    borderRadius: 5,
    margin: 10,
  },
  output: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    margin: 10,
    height: 80,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    borderRadius: 5,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
