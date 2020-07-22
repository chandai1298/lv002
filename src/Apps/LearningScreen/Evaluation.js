import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
// import Questions from '../../Components/LearningComponents/Questions';
import {IN4_APP} from '../../ConnectServer/In4App';
import {Style, QuestionStyle, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderQuestion from '../../Components/LearningComponents/HeaderQuestion';

const Evaluation = ({route, navigation}) => {
  const [answer, setAnswer] = React.useState('');
  const {count, crown, score, totalLength, id_category} = route.params;
  const c = parseInt(JSON.stringify(count));
  const totalLength2 = parseInt(JSON.stringify(totalLength));
  const idCategory = parseInt(JSON.stringify(id_category));

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
      id: '',
      id_part: '',
      id_lession: '',
    },
  ]);
  const getData = () => {
    const apiURL = IN4_APP.getQuestion;
    fetch(apiURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: idCategory,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setData(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const question2 = data[totalLength2];

  // const sectionAnswer = () => {
  //   var promise = null;
  //   let type = question2.id_part;

  //   switch (type) {
  //     case 1:
  //       var string = question2.detail_question;
  //       var arr = string.split(' ');
  //       promise = (
  //         <View style={{flex: 8}}>
  //           <View style={{flex: 2}}>
  //             <Text style={[Style.text18, {marginBottom: 10}]}>Cau hoi</Text>
  //             <Text>{JSON.stringify(question2.question)}</Text>
  //           </View>

  //           <View style={QuestionStyle.sectionAnswer}>
  //             <TextInput
  //               style={{
  //                 height: 40,
  //                 borderColor: 'gray',
  //                 borderWidth: 1,
  //                 width: '100%',
  //               }}
  //               onChangeText={(text) => setAnswer(text)}
  //               value={answer}
  //             />
  //             {arr.map((item, key) => (
  //               <TouchableOpacity key={key} style={QuestionStyle.tchAnswer}>
  //                 <Text>{item}</Text>
  //               </TouchableOpacity>
  //             ))}
  //             {console.log(type)}
  //           </View>
  //         </View>
  //       );
  //       break;
  //     case 2:
  //       var string = question2.detail_question;
  //       var arr = string.split('#');
  //       promise = (
  //         <View style={{flex: 8}}>
  //           <View style={{flex: 2}}>
  //             <Text style={[Style.text18, {marginBottom: 10}]}>Cau hoi</Text>
  //             <Text>{JSON.stringify(question2.question)}</Text>
  //           </View>

  //           <View style={QuestionStyle.sectionAnswer}>
  //             <TextInput
  //               style={{
  //                 height: 40,
  //                 borderColor: 'gray',
  //                 borderWidth: 1,
  //                 width: '100%',
  //               }}
  //               onChangeText={(text) => setAnswer(text)}
  //               value={answer}
  //             />
  //             {arr.map((item, key) => (
  //               <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
  //                 <Text>{item}</Text>
  //               </TouchableOpacity>
  //             ))}
  //             {console.log(type)}
  //           </View>
  //         </View>
  //       );
  //       break;
  //     case 3:
  //       promise = (
  //         <View style={{flex: 8}}>
  //           <Text style={[Style.text18, {marginBottom: 10}]}>Cau hoi</Text>
  //           <Text>{JSON.stringify(question2.question)}</Text>

  //           <View
  //             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //             <TextInput
  //               style={{
  //                 height: 40,
  //                 borderColor: 'gray',
  //                 borderWidth: 1,
  //                 width: '100%',
  //               }}
  //               onChangeText={(text) => setAnswer(text)}
  //               value={answer}
  //             />
  //             <TouchableOpacity style={QuestionStyle.tchAnswer3}>
  //               <FontAwesome5
  //                 name="microphone"
  //                 size={DIMENSION.sizeIconBig}
  //                 color="#fff"
  //               />
  //             </TouchableOpacity>
  //             {console.log(type)}
  //           </View>
  //         </View>
  //       );
  //       break;
  //     case 4:
  //       var string = question2.detail_question;
  //       var arr = string.split(' ');
  //       promise = (
  //         <View style={{flex: 8}}>
  //           <View style={{flex: 2}}>
  //             <Text style={[Style.text18, {marginBottom: 10}]}>Cau hoi</Text>
  //             <View style={{alignItems: 'center'}}>
  //               <TextInput
  //                 style={{
  //                   height: 40,
  //                   borderColor: 'gray',
  //                   borderWidth: 1,
  //                   width: '100%',
  //                 }}
  //                 onChangeText={(text) => setAnswer(text)}
  //                 value={answer}
  //               />
  //               <TouchableOpacity style={QuestionStyle.tchAnswer4}>
  //                 <MaterialCommunityIcons
  //                   name="volume-high"
  //                   size={DIMENSION.sizeIconSmall}
  //                   color="#fff"
  //                 />
  //               </TouchableOpacity>
  //             </View>
  //           </View>

  //           <View style={QuestionStyle.sectionAnswer}>
  //             {arr.map((item, key) => (
  //               <TouchableOpacity key={key} style={QuestionStyle.tchAnswer}>
  //                 <Text>{item}</Text>
  //               </TouchableOpacity>
  //             ))}
  //             {console.log(type)}
  //           </View>
  //         </View>
  //       );
  //       break;
  //     default:
  //       break;
  //   }
  //   return promise;
  // };

  const check = () => {
    if (data.length == 0) {
      navigation.navigate('Home');
    } else {
      if (answer === question2.answer) {
        data.some((item) => {
          if (item.id === question2.id) {
            if (data.length > 1) {
              data.splice(data.indexOf(item), 1);
              console.log('da xoa ' + item);
              navigation.navigate('testEvaluation', {
                totalLength: Math.floor(Math.random() * data.length),
                count: count + 1,
                score: score + 10,
                crown: crown,
              });
            } else navigation.navigate('Home');
          }
        });
        setAnswer('');
      } else {
        navigation.navigate('testEvaluation', {
          totalLength: Math.floor(Math.random() * data.length),
          score: score,
          crown: crown - 1,
        });
        setAnswer('');
      }
    }
  };
  return (
    <View style={{height: '100%', width: '100%', padding: 15}}>
      <HeaderQuestion navigation={navigation} count={c * 0.1 + 0.1} />
      {question2.id != null ? (
        <View>
          <Text>Cau hoi</Text>
        </View>
      ) : (
        <View>
          <Text>Dang cap nhat</Text>
        </View>
      )}
      <TouchableOpacity style={QuestionStyle.btnSubmit} onPress={() => check()}>
        <Text style={Style.text15}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Evaluation;
