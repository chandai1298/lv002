import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';

const DATA = [
  {
    label: 'bạn bè',
    icon: 'user-friends',
    num: 16,
    colorIcon: '#79c615',
  },
  {
    label: 'tổng điểm',
    icon: 'bolt',
    num: 3746,
    colorIcon: '#ffc107',
  },
  {
    label: 'vương miện',
    icon: 'crown',
    num: 1265,
    colorIcon: '#ff9800',
  },
  {
    label: 'chuỗi ngày',
    icon: 'fire-alt',
    num: 16,
    colorIcon: '#e91e63',
  },
];

const AvatarItem = ({numBanbe, icon, colorIcon, label}) => {
  return (
    <View style={ProfileStyle.flexRowIcon}>
      <View style={ProfileStyle.widthIcon}>
        <FontAwesome5 name={icon} size={18} color={colorIcon} />
      </View>

      <LinearTextGradient
        locations={[0, 1]}
        colors={['#091048', '#754ea6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={{fontSize: 18}}>
          {numBanbe} {label}
        </Text>
      </LinearTextGradient>
    </View>
  );
};
const Avatar = ({image, name, username}) => {
  return (
    <View style={[ProfileStyle.sectionAvatar]}>
      <View style={[ProfileStyle.sectionAvtLeft, {paddingLeft: 5}]}>
        <View
          style={[
            Style.coverCenter,
            {
              flexDirection: 'row',
              justifyContent: 'flex-start',
            },
          ]}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#091048', '#754ea6']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={[Style.text20]}>{name}</Text>
          </LinearTextGradient>
          <View style={{marginLeft: 5}}>
            <FontAwesome5
              name="seedling"
              size={DIMENSION.sizeIcon}
              color="#79c615"
            />
          </View>
        </View>
        <LinearTextGradient
          locations={[0, 1]}
          style={Style.coverCenter}
          colors={['#091048', '#754ea6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={{fontSize: 18}}>{username}</Text>
        </LinearTextGradient>
        <View>
          <FlatList
            style={{width: DIMENSION.width}}
            data={DATA}
            renderItem={({item}) => (
              <AvatarItem
                icon={item.icon}
                colorIcon={item.colorIcon}
                label={item.label}
                numBanbe={item.num}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>

      <View style={[ProfileStyle.SectionAvtRight, Style.coverCenter]}>
        <Image
          resizeMode="cover"
          source={{
            uri:
              image !== null
                ? image
                : 'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/B71D1D97-9FF3-444A-B7F3-E1CAC41A8BAE.jpg?alt=media&token=2087bb6f-4b1a-451e-8deb-d8948fefb651',
          }}
          style={Style.images}
        />
      </View>
    </View>
  );
};
export default Avatar;
