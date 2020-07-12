import React, {useEffect, Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Style, QuestionStyle} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HeaderQuestion from './HeaderQuestion';

const SectionQuestion = ({question}) => {
  return (
    <View style={{flex: 4}}>
      <Text style={[Style.text18, {marginBottom: 10}]}>
        {question.title}
        {question.id_title}
      </Text>

      <Text>{JSON.stringify(question.question)}</Text>
    </View>
  );
};
const SectionAnswer = ({question}) => {
  var string = question.detail_question;
  var arr = string.split(' ');
  return (
    <View style={QuestionStyle.sectionAnswer}>
      {arr.map((item, key) => (
        <TouchableOpacity key={key} style={QuestionStyle.tchAnswer}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Questions = ({route, navigation, question}) => {
  const {count} = route.params;
  const c = parseInt(JSON.stringify(count));
  return (
    <View style={{height: '100%', width: '100%', padding: 15}}>
      <HeaderQuestion count={c * 0.1 + 0.1} />
      <SectionQuestion question={question[c]} />
      <SectionAnswer question={question[c]} />
      {console.log(question[c])}
      <TouchableOpacity
        style={QuestionStyle.btnSubmit}
        onPress={() =>
          c == 7
            ? navigation.navigate('Home')
            : navigation.navigate('testEvaluation', {count: count + 1})
        }>
        <Text style={Style.text15}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Questions;
