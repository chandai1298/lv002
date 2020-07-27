import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {IN4_APP} from '../../ConnectServer/In4App';
import {LearningStyle, Style, DIMENSION} from '../../CommonStyles';

const OnB1 = ({route, navigation}) => {
  const {id_category} = route.params;
  const idCategory = parseInt(JSON.stringify(id_category));
  const [data, setData] = React.useState([
    {
      id: '',
      id_category: '',
      link: '',
      name: '',
      image: '1',
      imageCheck: '1',
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
    <View>
      <FlatList
        style={{marginTop: 40}}
        columnWrapperStyle={{justifyContent: 'space-around', flex: 1}}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{marginBottom: 5}}
            onPress={() =>
              navigation.navigate(item.link, {
                id_category: item.id_category,
                id_lession: item.id,
                nameLession: `${item.name}`,
              })
            }>
            <Image
              source={{
                uri: item.imageCheck,
              }}
              resizeMode="contain"
              style={Style.images2}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};
export default OnB1;
