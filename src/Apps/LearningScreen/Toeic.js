import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IN4_APP} from '../../ConnectServer/In4App';
import {LearningStyle, Style, DIMENSION} from '../../CommonStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

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
    <View style={Style.coverCenter}>
      <View
        style={[
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 15,
            alignContent: 'center',
            justifyContent: 'center',
          },
        ]}>
        {data.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={[
              LearningStyle.tchLession,
              {
                width: 150,
                height: 150,
                borderRadius: 150,
                margin: 10,
              },
              Style.boxShadow,
            ]}
            onPress={() =>
              navigation.navigate(item.link, {id_category: item.id_category})
            }>
            <LinearGradient
              style={[
                {
                  width: '100%',
                  height: '100%',
                  borderRadius: 150,
                },
                Style.coverCenter,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#687ae4', '#754ea6']}>
              <MaterialCommunityIcons
                name={getIcon(item.name)}
                size={DIMENSION.sizeIconSmall}
                color="#fff"
              />
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
export default Toeic;
