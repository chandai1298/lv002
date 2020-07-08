import React, {useEffect} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {Style, SettingStyle} from '../../CommonStyles';

const Avatar = ({image}) => (
  <View style={Style.coverCenter}>
    <Image
      source={{
        uri:
          image === null
            ? 'https://firebasestorage.googleapis.com/v0/b/fir-rn-785e2.appspot.com/o/B71D1D97-9FF3-444A-B7F3-E1CAC41A8BAE.jpg?alt=media&token=2087bb6f-4b1a-451e-8deb-d8948fefb651'
            : 'image',
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
