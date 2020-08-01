import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {IN4_APP} from '../../../ConnectServer/In4App';
import {QuestionStyle, Style, DIMENSION} from '../../../CommonStyles';
import HeaderQuestion from '../../../Components/LearningComponents/HeaderQuestion';
import Player from '../../SoundComponents/Player';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';

const PartDetail = ({route, navigation}) => {
  const [loading, setLoading] = React.useState(true);
  const [answer, setAnswer] = React.useState(null);
  const [answer2, setAnswer2] = React.useState(null);
  const [answer3, setAnswer3] = React.useState(null);
  const [answer4, setAnswer4] = React.useState(null);
  const [answer5, setAnswer5] = React.useState(null);
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

  const getData = async () => {
    const apiURL = await IN4_APP.getQuestionPart;
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const question = data[totalLength2];
  const question2 = data[totalLength2 + 1];
  const question3 = data[totalLength2 + 2];
  const question4 = data[totalLength2 + 3];
  const question5 = data[totalLength2 + 4];

  const AnswerABCD = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(item.dapanA)}>
          <Text style={Style.text16}>{item.dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(item.dapanB)}>
          <Text style={Style.text16}>{item.dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(item.dapanC)}>
          <Text style={Style.text16}>{item.dapanC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(item.dapanD)}>
          <Text style={Style.text16}>{item.dapanD}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const AnswerABCD2 = ({item2}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer2(item2.dapanA)}>
          <Text style={Style.text16}>{item2.dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer2(item2.dapanB)}>
          <Text style={Style.text16}>{item2.dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer2(item2.dapanC)}>
          <Text style={Style.text16}>{item2.dapanC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer2(item2.dapanD)}>
          <Text style={Style.text16}>{item2.dapanD}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const AnswerABCD3 = ({item3}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer3(item3.dapanA)}>
          <Text style={Style.text16}>{item3.dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer3(item3.dapanB)}>
          <Text style={Style.text16}>{item3.dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer3(item3.dapanC)}>
          <Text style={Style.text16}>{item3.dapanC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer3(item3.dapanD)}>
          <Text style={Style.text16}>{item3.dapanD}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const AnswerABCD4 = ({item4}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer4(item4.dapanA)}>
          <Text style={Style.text16}>{item4.dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer4(item4.dapanB)}>
          <Text style={Style.text16}>{item4.dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer4(item4.dapanC)}>
          <Text style={Style.text16}>{item4.dapanC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer4(item4.dapanD)}>
          <Text style={Style.text16}>{item4.dapanD}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const AnswerABCD5 = ({item5}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer5(item5.dapanA)}>
          <Text style={Style.text16}>{item5.dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer5(item5.dapanB)}>
          <Text style={Style.text16}>{item5.dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer5(item5.dapanC)}>
          <Text style={Style.text16}>{item5.dapanC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer5(item5.dapanD)}>
          <Text style={Style.text16}>{item5.dapanD}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const AnswerABC = ({dapanA, dapanB, dapanC}) => {
    return (
      <View>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(dapanA)}>
          <Text style={Style.text16}>{1 == 1 ? 'Option A' : dapanA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(dapanB)}>
          <Text style={Style.text16}>{1 == 1 ? 'Option B' : dapanB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={QuestionStyle.tchAnswer2}
          onPress={() => setAnswer(dapanC)}>
          <Text style={Style.text16}>{1 == 1 ? 'Option C' : dapanC}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const countQuestionPart7 = () => {
    var count = 0;
    data.some((item) => {
      if (item.sound === question.sound && item.sound === question5.sound) {
        count = 5;
      } else if (
        item.sound === question.sound &&
        item.sound === question4.sound
      ) {
        count = 4;
      } else if (
        item.sound === question.sound &&
        item.sound === question3.sound
      ) {
        count = 3;
      } else if (
        item.sound === question.sound &&
        item.sound === question2.sound
      ) {
        count = 2;
      }
    });
    return count;
  };
  const MultiQuestion = ({item, item2, item3, item4, item5}) => {
    var promise = null;
    switch (item.id_part) {
      case 7:
        switch (countQuestionPart7()) {
          case 5:
            promise = (
              <View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD item={question} />
                  </View>
                </View>
                <View style={{marginBottom: 15, marginTop: 15}}>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item2.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD2 item2={question2} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item3.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD3 item3={question3} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item4.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD4 item4={question4} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item5.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD5 item5={question5} />
                  </View>
                </View>
              </View>
            );
            break;
          case 4:
            promise = (
              <View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD item={question} />
                  </View>
                </View>
                <View style={{marginBottom: 15, marginTop: 15}}>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item2.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD2 item2={question2} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item3.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD3 item3={question3} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item4.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD4 item4={question4} />
                  </View>
                </View>
              </View>
            );
            break;
          case 3:
            promise = (
              <View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD item={question} />
                  </View>
                </View>
                <View style={{marginBottom: 15, marginTop: 15}}>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item2.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD2 item2={question2} />
                  </View>
                </View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item3.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD3 item3={question3} />
                  </View>
                </View>
              </View>
            );
            break;
          case 2:
            promise = (
              <View>
                <View>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD item={question} />
                  </View>
                </View>
                <View style={{marginBottom: 15, marginTop: 15}}>
                  <View style={{marginBottom: 10}}>
                    <Text style={Style.text16}>{item2.question}</Text>
                  </View>
                  <View>
                    <AnswerABCD2 item2={question2} />
                  </View>
                </View>
              </View>
            );
            break;
          default:
            break;
        }
        break;
      default:
        promise = (
          <View>
            <View>
              <View style={{marginBottom: 10}}>
                <Text style={Style.text16}>{item.question}</Text>
              </View>
              <View>
                <AnswerABCD item={question} />
              </View>
            </View>
            <View style={{marginBottom: 15, marginTop: 15}}>
              <View style={{marginBottom: 10}}>
                <Text style={Style.text16}>{item2.question}</Text>
              </View>
              <View>
                <AnswerABCD2 item2={question2} />
              </View>
            </View>
            <View>
              <View style={{marginBottom: 10}}>
                <Text style={Style.text16}>{item3.question}</Text>
              </View>
              <View>
                <AnswerABCD3 item3={question3} />
              </View>
            </View>
          </View>
        );
        break;
    }
    return promise;
  };

  const sectionAnswer = () => {
    var promise = null;
    switch (question.id_part) {
      case 1:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 1: Chọn một đáp án mô tả chính xác nhất nội dung có trong
                  hình.
                </Text>
              </LinearTextGradient>

              <View style={Style.coverCenter}>
                <Player tracks={question.sound} />
              </View>
            </View>
            <View style={{flex: 3}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                source={{uri: question.image}}
              />
            </View>
            <View style={{flex: 5, padding: 15}}>
              <AnswerABCD item={question} />
            </View>
          </View>
        );
        break;
      case 2:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 2: Chọn một câu hồi đáp phù hợp nhất cho câu hỏi.
                </Text>
              </LinearTextGradient>
            </View>
            <View style={{flex: 3}}>
              <Player tracks={question.sound} />
            </View>
            <View style={{flex: 5, padding: 15}}>
              <AnswerABC
                dapanA={question.dapanA}
                dapanB={question.dapanB}
                dapanC={question.dapanC}
              />
            </View>
          </View>
        );
        break;
      case 3:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 3: Bạn đọc câu hỏi và chọn câu trả lời phù hợp nhất cho
                  câu hỏi.
                </Text>
              </LinearTextGradient>

              <View style={Style.coverCenter}>
                <Player tracks={question.sound} />
              </View>
            </View>
            <View style={{flex: 8, padding: 15}}>
              <ScrollView>
                <MultiQuestion
                  item={question}
                  item2={question2}
                  item3={question3}
                />
              </ScrollView>
            </View>
          </View>
        );
        break;
      case 4:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 4: Bạn đọc câu hỏi và chọn câu trả lời phù hợp nhất cho
                  câu hỏi.
                </Text>
              </LinearTextGradient>

              <View style={Style.coverCenter}>
                <Player tracks={question.sound} />
              </View>
            </View>
            <View style={{flex: 8, padding: 15}}>
              <ScrollView>
                <MultiQuestion
                  item={question}
                  item2={question2}
                  item3={question3}
                />
              </ScrollView>
            </View>
          </View>
        );
        break;
      case 5:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 5: Chọn một đáp án phù hợp nhất để điền vào chỗ trống.
                </Text>
              </LinearTextGradient>
            </View>
            <View style={{flex: 2}}>
              <Text style={Style.text16}>{question.question}</Text>
            </View>
            <View style={{flex: 7, padding: 15}}>
              <AnswerABCD item={question} />
            </View>
          </View>
        );
        break;
      case 6:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 2}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 6: Chọn một đáp án phù hợp nhất để điền vào chỗ trống.
                </Text>
              </LinearTextGradient>

              <View style={Style.coverCenter}>
                <Player tracks={question.sound} />
              </View>
            </View>
            <View style={{flex: 8}}>
              <Text>{question.image}</Text>
            </View>
          </View>
        );
        break;
      case 7:
        promise = (
          <View style={{flex: 10}}>
            <View style={{flex: 1}}>
              <LinearTextGradient
                locations={[0, 1]}
                colors={['#091048', '#754ea6']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text style={Style.text20}>
                  Part 7: Bạn đọc câu hỏi và chọn câu trả lời phù hợp nhất cho
                  câu hỏi.
                </Text>
              </LinearTextGradient>
            </View>
            <View style={{flex: 9}}>
              <ScrollView>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: '#ebebeb',
                    padding: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={Style.text16}>{question.sound}</Text>
                </View>
                <View style={{padding: 15}}>
                  <MultiQuestion
                    item={question}
                    item2={question2}
                    item3={question3}
                    item4={question4}
                    item5={question5}
                  />
                </View>
              </ScrollView>
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
      navigation.navigate('part');
    } else {
      switch (question.id_part) {
        case 3:
          console.log(
            'dapan1: ' +
              answer +
              ', dapan2: ' +
              answer2 +
              ', dapan3: ' +
              answer3,
          );
          if (
            answer === question.answer &&
            answer2 === question2.answer &&
            answer3 === question3.answer
          ) {
            data.some((item) => {
              if (item.sound === question.sound) {
                if (data.length > 3) {
                  data.splice(data.indexOf(item), 3);
                  console.log(data);
                  navigation.navigate('partDetail', {
                    totalLength:
                      Math.round(
                        Math.floor(Math.random() * (data.length - 1)) / 3,
                      ) * 3,
                    count: count + 1,
                    score: score + 10,
                    crown: crown,
                  });
                } else navigation.navigate('part');
              }
            });
            setAnswer('');
            setAnswer2('');
            setAnswer3('');
          } else {
            navigation.navigate('partDetail', {
              totalLength:
                Math.round(Math.floor(Math.random() * (data.length - 1)) / 3) *
                3,
              score: score,
              crown: crown - 1,
            });
            setAnswer('');
            setAnswer2('');
            setAnswer3('');
          }
          break;
        case 4:
          console.log(
            'dapan1: ' +
              answer +
              ', dapan2: ' +
              answer2 +
              ', dapan3: ' +
              answer3,
          );
          if (
            answer === question.answer &&
            answer2 === question2.answer &&
            answer3 === question3.answer
          ) {
            data.some((item) => {
              if (item.sound === question.sound) {
                if (data.length > 3) {
                  data.splice(data.indexOf(item), 3);
                  navigation.navigate('partDetail', {
                    totalLength:
                      Math.round(
                        Math.floor(Math.random() * (data.length - 1)) / 3,
                      ) * 3,
                    count: count + 1,
                    score: score + 10,
                    crown: crown,
                  });
                } else navigation.navigate('part');
              }
            });
            setAnswer('');
            setAnswer2('');
            setAnswer3('');
          } else {
            navigation.navigate('partDetail', {
              totalLength:
                Math.round(Math.floor(Math.random() * (data.length - 1)) / 3) *
                3,
              score: score,
              crown: crown - 1,
            });
            setAnswer('');
            setAnswer2('');
            setAnswer3('');
          }
          break;
        case 7:
          switch (countQuestionPart7()) {
            case 5:
              console.log(
                'dapan1: ' +
                  answer +
                  ', dapan2: ' +
                  answer2 +
                  ', dapan3: ' +
                  answer3 +
                  ', dapan4: ' +
                  answer4 +
                  ', dapan5: ' +
                  answer5,
              );
              if (
                answer === question.answer &&
                answer2 === question2.answer &&
                answer3 === question3.answer &&
                answer4 === question4.answer &&
                answer5 === question5.answer
              ) {
                data.some((item) => {
                  if (item.sound === question.sound) {
                    if (data.length > 5) {
                      data.splice(data.indexOf(item), 5);
                      navigation.navigate('partDetail', {
                        totalLength: 0,
                        count: count + 1,
                        score: score + 10,
                        crown: crown,
                      });
                    } else navigation.navigate('part');
                  }
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
                setAnswer4('');
                setAnswer5('');
              } else {
                data.push(question);
                data.push(question2);
                data.push(question3);
                data.push(question4);
                data.push(question5);
                data.splice(0, 5);
                navigation.navigate('partDetail', {
                  totalLength: 0,
                  score: score,
                  crown: crown - 1,
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
                setAnswer4('');
                setAnswer5('');
              }
              break;
            case 4:
              console.log(
                'dapan1: ' +
                  answer +
                  ', dapan2: ' +
                  answer2 +
                  ', dapan3: ' +
                  answer3 +
                  ', dapan4: ' +
                  answer4,
              );
              if (
                answer === question.answer &&
                answer2 === question2.answer &&
                answer3 === question3.answer &&
                answer4 === question4.answer
              ) {
                data.some((item) => {
                  if (item.sound === question.sound) {
                    if (data.length > 5) {
                      data.splice(data.indexOf(item), 4);
                      navigation.navigate('partDetail', {
                        totalLength: 0,
                        count: count + 1,
                        score: score + 10,
                        crown: crown,
                      });
                    } else navigation.navigate('part');
                  }
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
                setAnswer4('');
              } else {
                data.push(question);
                data.push(question2);
                data.push(question3);
                data.push(question4);
                data.splice(0, 4);
                navigation.navigate('partDetail', {
                  totalLength: 0,
                  score: score,
                  crown: crown - 1,
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
                setAnswer4('');
              }
              break;
            case 3:
              console.log(
                'dapan1: ' +
                  answer +
                  ', dapan2: ' +
                  answer2 +
                  ', dapan3: ' +
                  answer3,
              );
              if (
                answer === question.answer &&
                answer2 === question2.answer &&
                answer3 === question3.answer
              ) {
                data.some((item) => {
                  if (item.sound === question.sound) {
                    if (data.length > 5) {
                      data.splice(data.indexOf(item), 3);
                      navigation.navigate('partDetail', {
                        totalLength: 0,
                        count: count + 1,
                        score: score + 10,
                        crown: crown,
                      });
                    } else navigation.navigate('part');
                  }
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
              } else {
                data.push(question);
                data.push(question2);
                data.push(question3);
                data.splice(0, 3);
                navigation.navigate('partDetail', {
                  totalLength: 0,
                  score: score,
                  crown: crown - 1,
                });
                setAnswer('');
                setAnswer2('');
                setAnswer3('');
              }
              break;
            case 2:
              console.log('dapan1: ' + answer + ', dapan2: ' + answer2);
              if (answer === question.answer && answer2 === question2.answer) {
                data.some((item) => {
                  if (item.sound === question.sound) {
                    if (data.length > 5) {
                      data.splice(data.indexOf(item), 2);
                      navigation.navigate('partDetail', {
                        totalLength: 0,
                        count: count + 1,
                        score: score + 10,
                        crown: crown,
                      });
                    } else navigation.navigate('part');
                  }
                });
                setAnswer('');
                setAnswer2('');
              } else {
                data.push(question);
                data.push(question2);
                data.push(question3);
                data.splice(0, 2);
                navigation.navigate('partDetail', {
                  totalLength: 0,
                  score: score,
                  crown: crown - 1,
                });
                setAnswer('');
                setAnswer2('');
              }
              break;
            default:
              break;
          }
          break;
        default:
          console.log(answer);
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
                } else navigation.navigate('part');
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
          break;
      }
    }
  };
  return data.length > 0 ? (
    loading ? (
      <ActivityIndicator
        style={Style.coverCenter}
        color="#9a9a9a"
        size="large"
      />
    ) : (
      <View style={{height: '100%', width: '100%', padding: 15}}>
        <HeaderQuestion navigation={navigation} count={c * 0.2} />
        {sectionAnswer()}

        <TouchableOpacity
          style={[Style.boxShadow, {height: 50, borderRadius: 30}]}
          onPress={() => check()}
          activeOpacity={0.5}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#687ae4', '#754ea6']}
            style={[Style.coverCenter, QuestionStyle.btnSubmit]}>
            <Text style={[Style.text20, Style.textColore6e6f6]}>Kiểm tra</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    )
  ) : (
    <View style={Style.coverCenter}>
      <Text>Cau hoi dang cap nhat</Text>
    </View>
  );
};
export default PartDetail;
