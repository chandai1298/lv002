import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IN4_APP} from '../../../ConnectServer/In4App';
import {LearningStyle, Style, DIMENSION} from '../../../CommonStyles';
import LinearGradient from 'react-native-linear-gradient';

const Part = ({route, navigation}) => {
  const {nameLession, id_category, id_lession} = route.params;
  const idCategory = parseInt(JSON.stringify(id_category));
  const idLession = parseInt(JSON.stringify(id_lession));
  const name_Lession = JSON.stringify(nameLession);
  const [reads, setReads] = React.useState([
    {
      id: '',
      link: '',
      name: '',
    },
  ]);
  const [listening, setListening] = React.useState([
    {
      id: '',
      link: '',
      name: '',
    },
  ]);
  const getData = () => {
    const apiURL = IN4_APP.getPartRead;
    fetch(apiURL)
      .then((res) => res.json())
      .then((results) => {
        setReads(results);
      })
      .catch((error) => {
        console.log(error);
      });

    const apiURL2 = IN4_APP.getPartListening;
    fetch(apiURL2)
      .then((res) => res.json())
      .then((results) => {
        setListening(results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={[Style.coverCenter, {flex: 1}]}>
        <Text style={Style.text18}>{name_Lession}</Text>
      </View>
      <View style={[LearningStyle.container, {alignContent: 'flex-end'}]}>
        {listening.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={[LearningStyle.tchLessionCover, Style.boxShadow]}
            onPress={() =>
              navigation.navigate(item.link, {
                id_category: idCategory,
                id_lession: idLession,
                id_part: item.id,
              })
            }>
            <LinearGradient
              style={LearningStyle.tchLession}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#687ae4', '#754ea6']}>
              <Text style={[Style.text20, Style.textColore6e6f6]}>
                {item.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      <View style={Style.line} />
      <View style={LearningStyle.container}>
        {reads.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={[LearningStyle.tchLessionCover, Style.boxShadow]}
            onPress={() =>
              navigation.navigate(item.link, {
                id_category: idCategory,
                id_lession: idLession,
                id_part: item.id,
              })
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={LearningStyle.tchLession}
              colors={['#687ae4', '#754ea6']}>
              <Text style={[Style.text20, Style.textColore6e6f6]}>
                {item.name}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Part;
