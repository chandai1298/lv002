import React, {useEffect, Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import {Style, QuestionStyle, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderQuestion from './HeaderQuestion';

const Questions = ({route, navigation, question}) => {
  const [answer, setAnswer] = React.useState('');
  const questions = question;
  const {count, crown, score} = route.params;
  const c = parseInt(JSON.stringify(count));
  const question2 = questions[c];

  const sectionAnswer = () => {
    var promise = null;
    let type = question2.id_title;

    switch (type) {
      case 1:
        var string = question2.detail_question;
        var arr = string.split(' ');
        promise = (
          <View style={{flex: 8}}>
            <View style={{flex: 2}}>
              <Text style={[Style.text18, {marginBottom: 10}]}>
                {question2.title}
              </Text>
              <Text>{JSON.stringify(question2.question)}</Text>
            </View>

            <View style={QuestionStyle.sectionAnswer}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: '100%',
                }}
                onChangeText={(text) => setAnswer(text)}
                value={answer}
              />
              {arr.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
              {console.log(type)}
            </View>
          </View>
        );
        break;
      case 2:
        var string = question2.detail_question;
        var arr = string.split('#');
        promise = (
          <View style={{flex: 8}}>
            <View style={{flex: 2}}>
              <Text style={[Style.text18, {marginBottom: 10}]}>
                {question2.title}
              </Text>
              <Text>{JSON.stringify(question2.question)}</Text>
            </View>

            <View style={QuestionStyle.sectionAnswer}>
              {arr.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
              {console.log(type)}
            </View>
          </View>
        );
        break;
      case 3:
        promise = (
          <View style={{flex: 8}}>
            <Text style={[Style.text18, {marginBottom: 10}]}>
              {question2.title}
            </Text>
            <Text>{JSON.stringify(question2.question)}</Text>

            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={QuestionStyle.tchAnswer3}>
                <FontAwesome5
                  name="microphone"
                  size={DIMENSION.sizeIconBig}
                  color="#fff"
                />
              </TouchableOpacity>
              {console.log(type)}
            </View>
          </View>
        );
        break;
      case 4:
        var string = question2.detail_question;
        var arr = string.split(' ');
        promise = (
          <View style={{flex: 8}}>
            <View style={{flex: 2}}>
              <Text style={[Style.text18, {marginBottom: 10}]}>
                {question2.title}
              </Text>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={QuestionStyle.tchAnswer4}>
                  <MaterialCommunityIcons
                    name="volume-high"
                    size={DIMENSION.sizeIconSmall}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={QuestionStyle.sectionAnswer}>
              {arr.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              ))}
              {console.log(type)}
            </View>
          </View>
        );
        break;
      default:
        break;
    }
    return promise;
  };

  const check = () => {
    if (c == questions.length - 1) {
      navigation.navigate('Home');
    } else {
      if (answer == question2.answer) {
        navigation.navigate('testEvaluation', {
          count: count + 1,
          score: score + 10,
          crown: crown,
        });
        setAnswer('');
      } else {
        delete questions[3];
        navigation.navigate('testEvaluation', {
          count: count + 1,
          score: score,
          crown: crown - 1,
        });
        setAnswer('');
      }
    }
  };

  return (
    <View style={{height: '100%', width: '100%', padding: 15}}>
      <HeaderQuestion count={c * 0.1 + 0.1} />
      {sectionAnswer()}

      <TouchableOpacity style={QuestionStyle.btnSubmit} onPress={() => check()}>
        <Text style={Style.text15}>Kiểm tra</Text>
        {console.log(
          'score :' +
            JSON.stringify(score) +
            ', crown: ' +
            JSON.stringify(crown) +
            ', idquestion: ' +
            question2.id +
            ', length: ' +
            questions.length +
            ', count: ' +
            c,
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Questions;
