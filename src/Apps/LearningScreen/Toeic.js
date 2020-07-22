import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IN4_APP} from '../../ConnectServer/In4App';
import {LearningStyle, Style, DIMENSION} from '../../CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Toeic = ({route, navigation}) => {
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
  const getIcon = (title) => {
    let icon = null;
    switch (title) {
      case 'Listening':
        icon = 'ear-hearing';
        break;
      case 'Speaking':
        icon = 'volume-high';
        break;
      case 'Reading':
        icon = 'book-open-variant';
        break;
      case 'Writing':
        icon = 'lead-pencil';
        break;
      default:
        break;
    }
    return icon;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={[Style.coverCenter]}>
      {data.map((item, key) => (
        <TouchableOpacity
          key={key}
          style={[
            LearningStyle.tchLession,
            {
              width: DIMENSION.width / 3,
              height: DIMENSION.height / 5,
            },
          ]}
          onPress={() =>
            navigation.navigate(item.link, {id_category: item.id_category})
          }>
          <MaterialCommunityIcons
            name={getIcon(item.name)}
            size={DIMENSION.sizeIconSmall}
            color="#fff"
          />
          <Text style={Style.text15}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default Toeic;
