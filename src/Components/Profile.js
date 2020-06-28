// thu vien
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Style, ProfileStyle} from '../CommonStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderComponent from './HeaderComponent';
import ThanhTich from './ProfileComponent/ThanhTich';
import BanBe from './ProfileComponent/BanBe';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function ThanhTichComponent() {
  return <ThanhTich />;
}
function BanBeComponent() {
  return <BanBe />;
}

// Avatar
const Avatar = ({image, name}) => (
  <View style={[ProfileStyle.sectionAvatar]}>
    <View style={ProfileStyle.sectionAvtLeft}>
      {/* Ten va rank hien tai */}
      <View style={ProfileStyle.flexRowIcon}>
        {/* Ten */}
        <Text style={[Style.text18]}>{name}</Text>
        {/* icon rank */}
        <View>
          <FontAwesome5 name="seedling" size={18} color="#79c615" />
        </View>
      </View>

      {/* /ten dang nhap */}
      <Text>Hoaichodien</Text>
      <View style={ProfileStyle.flexRowIcon}>
        <View style={ProfileStyle.widthIcon}>
          <FontAwesome5 name="user-friends" size={15} color="#9e9e9e" />
        </View>
        <Text>16 bạn bè</Text>
      </View>
      <View style={ProfileStyle.flexRowIcon}>
        <View style={ProfileStyle.widthIcon}>
          <FontAwesome5 name="bolt" size={15} color="#ffeb3b" />
        </View>
        <Text>3746 tổng điểm</Text>
      </View>
      <View style={ProfileStyle.flexRowIcon}>
        <View style={ProfileStyle.widthIcon}>
          <FontAwesome5 name="crown" size={15} color="#ffc107" />
        </View>
        <Text>126 vương miện</Text>
      </View>
      <View style={ProfileStyle.flexRowIcon}>
        <View style={ProfileStyle.widthIcon}>
          <FontAwesome5 name="fire-alt" size={15} color="#fa494b" />
        </View>
        <Text>16 chuỗi ngày</Text>
      </View>
    </View>

    {/* avatar */}
    <View style={[ProfileStyle.SectionAvtRight, {justifyContent: 'center'}]}>
      <Image
        source={{uri: 'https://via.placeholder.com/150/92c952'}}
        style={Style.images}
      />
    </View>
  </View>
);

// class profile có header, avatar, 2 top tab thành tích đạt được, danh sách bạn bè
const Tab = createMaterialTopTabNavigator();
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {title, navigation, icon, desComponent} = this.props;
    return (
      <View style={Style.container}>
        <HeaderComponent
          title={title}
          icon={icon}
          navigation={navigation}
          desComponent={desComponent}
        />

        <Avatar name="Hoài chó điên" />

        <View style={ProfileStyle.containerPadding15}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {fontSize: 15},
              // tabStyle: {width: 100},
              style: {
                fontWeight: 'bold', // height: 40,
              },
            }}>
            <Tab.Screen
              name="ThanhTich"
              component={ThanhTichComponent}
              options={{
                tabBarLabel: 'Thành tích',
              }}
            />
            <Tab.Screen
              name="Banbe"
              component={BanBeComponent}
              options={{
                tabBarLabel: 'Bạn bè',
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    );
  }
}
