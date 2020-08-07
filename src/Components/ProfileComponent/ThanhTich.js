import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../../CommonStyles';
import * as Progress from 'react-native-progress';
import {LinearTextGradient} from 'react-native-text-gradient';

const DATA = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
  },
  {
    albumId: 1,
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
  },
  {
    albumId: 1,
    id: 6,
    title: 'accusamus ea aliquid et amet sequi nemo',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
  },
  {
    albumId: 1,
    id: 7,
    title: 'officia delectus consequatur vero aut veniam explicabo molestias',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
  },
  {
    albumId: 1,
    id: 8,
    title: 'aut porro officiis laborum odit ea laudantium corporis',
    url: 'https://via.placeholder.com/600/54176f',
    thumbnailUrl: 'https://via.placeholder.com/150/54176f',
  },
  {
    albumId: 1,
    id: 9,
    title: 'qui eius qui autem sed',
    url: 'https://via.placeholder.com/600/51aa97',
    thumbnailUrl: 'https://via.placeholder.com/150/51aa97',
  },
  {
    albumId: 1,
    id: 10,
    title: 'beatae et provident et ut vel',
    url: 'https://via.placeholder.com/600/810b14',
    thumbnailUrl: 'https://via.placeholder.com/150/810b14',
  },
];
const Items = ({title, thumbnailUrl}) => (
  <View style={ProfileStyle.sectionThanhTich}>
    <View style={ProfileStyle.sectionLeft}>
      <Image source={{uri: thumbnailUrl}} style={ProfileStyle.sectionLeftImg} />
    </View>
    <View style={[ProfileStyle.sectionLeft, {marginLeft: 15}]}>
      <LinearTextGradient
        locations={[0, 1]}
        colors={['#091048', '#754ea6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={Style.text20}>Header</Text>
      </LinearTextGradient>

      <Text style={{fontSize: 18}}>{title}</Text>
      <Progress.Bar progress={0.3} width={250} />
    </View>
  </View>
);

const ThanhTich = () => {
  return (
    <View>
      <FlatList
        style={{width: DIMENSION.width}}
        data={DATA}
        renderItem={({item}) => (
          <Items thumbnailUrl={item.thumbnailUrl} title={item.title} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default ThanhTich;
