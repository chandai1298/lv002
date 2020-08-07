import React, {useEffect} from 'react';
import {View, StatusBar, Text, Image} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../CommonStyles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HeaderComponent from './HeaderComponent';
import ThanhTich from '../Components/ProfileComponent/ThanhTich';
import BanBe from '../Components/ProfileComponent/BanBe';
import Avatar from '../Components/ProfileComponent/Avatar';
import {IN4_APP} from '../ConnectServer/In4App';
import axios from 'axios';

function ThanhTichComponent() {
  return <ThanhTich />;
}
function BanBeComponent() {
  return <BanBe />;
}

const Tab = createMaterialTopTabNavigator();
const Profile = ({title, navigation, icon, desComponent, route}) => {
  const {users} = route.params;

  const [ranks, setRank] = React.useState([
    {
      id: '',
      id_user: '',
      total_score: '',
      current_score: '',
      crown: '',
      streak: '',
      bestStreak: '',
      hint: '',
    },
  ]);

  const showData = () => {
    const getDefinition = IN4_APP.RankOfUser;
    axios
      .post(getDefinition, {
        id: users.Id,
      })
      .then(function (response) {
        setRank(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  useEffect(() => {
    showData();
  }, []);
  return (
    <View style={Style.container}>
      <StatusBar hidden={true} />

      <HeaderComponent
        title={title}
        icon={icon}
        navigation={navigation}
        desComponent={desComponent}
        data={users}
      />
      <Avatar
        name={users.Name}
        username={users.Username}
        image={users.Avatar}
        rankData={ranks[0]}
      />
      <View style={ProfileStyle.containerPadding15}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: [Style.text18, {color: '#9a9a9a'}],
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
};
export default Profile;
