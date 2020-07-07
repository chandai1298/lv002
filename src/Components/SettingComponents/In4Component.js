import React, {useEffect} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';

const Avatar = ({image}) => (
  <View style={Style.coverCenter}>
    <Image
      source={{
        uri: image === null ? 'https://via.placeholder.com/150/56a8c2' : 'image',
      }}
      style={Style.images}
    />
    <Text style={Style.text15}>Thay ảnh đại diện</Text>
  </View>
);
function Item({username, pass, name, email, image}) {
  return (
    <View>
      <Avatar image={image} />
      <View>
        <Text>Tên đăng nhập </Text>
        <TextInput style={Style.input} value={username} />
      </View>
      <View>
        <Text>Mật khẩu</Text>
        <TextInput style={Style.input} secureTextEntry={true} value={pass} />
      </View>
      <View>
        <Text>Tên</Text>
        <TextInput style={Style.input} value={name} />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput style={Style.input} value={email} />
      </View>
    </View>
  );
}
const In4Component = ({userData}) => {
  const [data, setData] = React.useState({
    id: '',
    username: '',
    password: '',
    name: '',
    email: '',
    avatar: '',
    roleId: '',
    isActive: '',
  });

  useEffect(() => {
    setData(userData);
  });
  return (
    <View style={SettingStyle.sectionIn4}>
      {console.log(data.username)}
      <Text style={Style.text18}> Hồ sơ của bạn</Text>
      <Item
        image={data.avatar}
        username={data.username}
        pass={data.password}
        name={data.name}
        email={data.email}
      />
    </View>
  );
};
export default In4Component;
