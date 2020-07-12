import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Questions from '../../Components/LearningComponents/Questions';
import {IN4_APP} from '../../../server/ConnectServer/In4App';

const Evaluation = ({route, navigation}) => {
  const [data, setData] = React.useState([
    {
      id_title: '',
      question: '',
      detail_question: '',
      answer: '',
      title: '',
      image: '',
      roleId: '',
      sound: '',
    },
  ]);
  const getData = () => {
    const apiURL = IN4_APP.getEvaluation;
    fetch(apiURL)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Questions navigation={navigation} route={route} question={data} />
    </View>
  );
};
export default Evaluation;
