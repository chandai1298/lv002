import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {IN4_APP} from '../../ConnectServer/In4App';
import {QuestionStyle, Style, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderQuestion from '../../Components/LearningComponents/HeaderQuestion';
import Player from '../SoundComponents/Player';
const PartDetail = ({route, navigation}) => {
  const [answer, setAnswer] = React.useState('');
  const {
    count,
    crown,
    score,
    totalLength,
    id_category,
    id_lession,
    id_part,
  } = route.params;
  const c = parseInt(JSON.stringify(count));
  const totalLength2 = parseInt(JSON.stringify(totalLength));
  const idCategory = parseInt(JSON.stringify(id_category));
  const idLession = parseInt(JSON.stringify(id_lession));
  const idPart = parseInt(JSON.stringify(id_part));

  const [data, setData] = React.useState([
    {
      id: '',
      id_lession: '',
      id_part: '',
      question: '',
      dapanA: '',
      dapanB: '',
      dapanC: '',
      dapanD: '',
      answer: '',
      image: '',
      isActive: '',
      sound: '',
    },
  ]);
  const getData = () => {
    const apiURL = IN4_APP.getQuestionPart;
    fetch(apiURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: idCategory,
        id_part: idPart,
        id_lession: idLession,
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
  const question = data[totalLength2];

  const sectionAnswer = () => {
    var promise = null;
    let type = question.id_part;
    switch (type) {
      case 1:
        var abcd = ['A', 'B', 'C', 'D'];
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                hình.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 2:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 2: Chọn một câu hồi đáp phù hợp nhất cho câu hỏi.
              </Text>
            </View>
            <View style={{flex: 3}}>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 3:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C', 'D'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 3: Bạn đọc câu hỏi và chọn câu trả lời phù hợp nhất cho câu
                hỏi.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 4:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C', 'D'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                hình.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 5:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C', 'D'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                hình.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 6:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C', 'D'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                hình.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
        break;
      case 7:
        var string = question.detail_question;
        var abcd = ['A', 'B', 'C', 'D'];
        var arr = string.split('#');
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <Text style={Style.text15}>
                Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                hình.
              </Text>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 3, backgroundColor: 'green'}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              {abcd.map((item, key) => (
                <TouchableOpacity key={key} style={QuestionStyle.tchAnswer2}>
                  <Text style={Style.text15}>Option {item}</Text>
                </TouchableOpacity>
              ))}
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
    if (data.length == 0) {
      navigation.navigate('Home');
    } else {
      if (answer === question.answer) {
        data.some((item) => {
          if (item.id === question.id) {
            if (data.length > 1) {
              data.splice(data.indexOf(item), 1);
              console.log('da xoa ' + item);
              navigation.navigate('partDetail', {
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
        navigation.navigate('partDetail', {
          totalLength: Math.floor(Math.random() * data.length),
          score: score,
          crown: crown - 1,
        });
        setAnswer('');
      }
    }
  };
  return data.length > 0 ? (
    <View style={{height: '100%', width: '100%', padding: 15}}>
      <HeaderQuestion navigation={navigation} count={c * 0.1 + 0.1} />
      {sectionAnswer()}
      <TouchableOpacity style={QuestionStyle.btnSubmit} onPress={() => check()}>
        <Text style={Style.text15}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <Text>Cau hoi dang cap nhat</Text>
    </View>
  );
};
export default PartDetail;
