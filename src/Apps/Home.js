import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Style, DIMENSION} from '../CommonStyles';
import HeaderHome from '../Components/HomeComponents/HeaderHome';
import HomeItem from '../Components/HomeComponents/HomeItem';
import {IN4_APP} from '../ConnectServer/In4App';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    id: 1,
    name: 'Từ điển',
    color2: '#687ae4',
    color1: '#754ea6a1',

    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/category%2Fdic.png?alt=media&token=1f2776d1-a3ce-4209-a287-dace24c3313e',
    link: 'dictionary',
    isActive: 1,
  },
  {
    id: 2,
    name: 'Dịch văn bản',
    color2: '#687ae4',
    color1: '#754ea6bd',

    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/category%2Ftranslate.png?alt=media&token=a554dd43-7333-4434-89e7-6613b66e56da',
    link: 'translator',
    isActive: 1,
  },
  {
    id: 3,
    name: 'Ôn luyện TOEIC',
    color2: '#687ae4',
    color1: '#754ea6d4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/category%2Ftoeic.png?alt=media&token=4a7dd9a4-3a78-42a5-afb6-2d59dd9e02dd',
    link: 'onTOEIC',
    isActive: 1,
  },
  {
    id: 4,
    name: 'Ôn thi B1',
    color2: '#687ae4',
    color1: '#754ea6e3',

    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/category%2Fb1.png?alt=media&token=0c2e4736-ef6a-4b78-8cd6-4f6fe88651dd',
    link: 'onB1',
    isActive: 1,
  },
  {
    id: 5,
    name: 'Kiểm tra đánh giá',
    color2: '#687ae4',
    color1: '#754ea6f0',
    image:
      'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/category%2Ftest.png?alt=media&token=f976502e-429e-4958-836f-acbd24515f0a',
    link: 'testEvaluation',
    isActive: 1,
  },
];
const Home = ({icon1, icon2, icon3, icon4, navigation, route}) => {
  return (
    // <LinearGradient
    //   style={[{flex: 1}]}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 0}}
    //   colors={['#7387ff4d', '#b078f942']}>
    <View style={[{flex: 1}]}>
      <StatusBar barStyle="light-content" hidden={true} />
      <HeaderHome icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />

      <View style={Style.coverCenter}>
        <FlatList
          style={{
            width: DIMENSION.width,
            marginTop: 40,
          }}
          data={data}
          renderItem={({item}) => (
            <HomeItem
              id_category={item.id}
              title={item.name}
              navigation={navigation}
              desComponent={item.link}
              color1={item.color1}
              color2={item.color2}
              image={item.image}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};
export default Home;
