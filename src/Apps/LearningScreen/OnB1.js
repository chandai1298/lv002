import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IN4_APP} from '../../ConnectServer/In4App';
import {LearningStyle, Style, DIMENSION} from '../../CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OnB1 = ({route, navigation}) => {
  const {id_category} = route.params;
  const idCategory = parseInt(JSON.stringify(id_category));
  const [data, setData] = React.useState([
    {
      id: '',
      id_category: '',
      link: '',
      name: '',
    },
  ]);
  const getData = () => {
    const apiURL = IN4_APP.getLession;
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

  return (
    <View style={LearningStyle.container}>
      {data.map((item, key) => (
        <TouchableOpacity
          key={key}
          style={LearningStyle.tchLession}
          onPress={() =>
            navigation.navigate(item.link, {
              id_category: item.id_category,
              id_lession: item.id,
              nameLession: `${item.name}`,
            })
          }>
          <Text style={Style.text15}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default OnB1;
