import React, {Component} from 'react';
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

export default class Translator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageFrom: '',
      languageTo: '',
      languageCode: 'en',
      inputText: '',
      outputText: '',
      submit: false,
      micOn: false,
    };
    this._buttonClick = this._buttonClick.bind(this);
  }
  handleTranslate = () => {
    this.setState({submit: true});
    const translator = TranslatorFactory.createTranslator();
    translator.translate(this.state.inputText).then((translated) => {
      Tts.getInitStatus().then(() => {
        Tts.speak(translated);
      });
      Tts.stop();
    });
  };
  async _buttonClick() {
    await this.setState({micOn: true});
    try {
      var spokenText = await SpeechAndroid.startSpeech(
        '',
        SpeechAndroid.DEFAULT,
      );
      await this.setState({inputText: spokenText});
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
    this.setState({micOn: false});
  }

  render() {
    TranslatorConfiguration.setConfig(
      ProviderTypes.Google,
      'AIzaSyBTXr7MqVz0OXJadyLXaKPkLIf2ik3hukk',
      this.state.languageCode,
    );
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={{flex: 1, height: 80}}
            placeholder="Enter Text"
            underlineColorAndroid="transparent"
            onChangeText={(inputText) => this.setState({inputText})}
            value={this.state.inputText}
          />
          <TouchableOpacity onPress={this._buttonClick}>
            {this.state.micOn ? (
              <Icon size={30} name="md-mic" style={styles.ImageStyle} />
            ) : (
              <Icon size={30} name="md-mic-off" style={styles.ImageStyle} />
            )}
          </TouchableOpacity>
        </View>

        <Picker
          selectedValue={this.state.languageTo}
          onValueChange={(lang) =>
            this.setState({languageTo: lang, languageCode: lang})
          }>
          {Object.keys(Languages).map((key) => (
            <Picker.Item key={key} label={Languages[key]} value={key} />
          ))}
        </Picker>

        <View style={styles.output}>
          {this.state.submit && <PowerTranslator text={this.state.inputText} />}
          {/* onTranslationEnd={this.textToSpeech} */}
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleTranslate}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
