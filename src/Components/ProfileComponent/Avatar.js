import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../../CommonStyles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
    colorIcon: '#ffeb3b',
  },
  {
    label: 'vương miện',
    icon: 'crown',
    num: 1265,
    colorIcon: '#ffc107',
  },
  {
    label: 'chuỗi ngày',
    icon: 'fire-alt',
    num: 16,
    colorIcon: '#fa494b',
  },
];

const AvatarItem = ({numBanbe, icon, colorIcon, label}) => {
  return (
    <View style={ProfileStyle.flexRowIcon}>
      <View style={ProfileStyle.widthIcon}>
        <FontAwesome5
          name={icon}
          size={DIMENSION.sizeIcon2}
          color={colorIcon}
        />
      </View>
      <Text>
        {numBanbe} {label}
      </Text>
    </View>
  );
};
export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null,
    };
  }
  componentDidMount() {
    this.requestAPIPhotos();
  }
  requestAPIPhotos = () => {
    this.setState({loading: true});
    const apiURL = 'https://jsonplaceholder.typicode.com/photos';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          loading: false,
          data: DATA,
          fullData: resJson,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  };
  render() {
    let {data} = this.state;
    let {image, name, username} = this.props;

    return (
      <View style={[ProfileStyle.sectionAvatar]}>
        <View style={ProfileStyle.sectionAvtLeft}>
          <View style={ProfileStyle.flexRowIcon}>
            <Text style={[Style.text18]}>{name}</Text>
            <View>
              <FontAwesome5
                name="seedling"
                size={DIMENSION.sizeIcon}
                color="#79c615"
              />
            </View>
          </View>

          <Text>{username}</Text>

          <View style={{marginBottom: 5}}>
            <FlatList
              style={{width: DIMENSION.width}}
              data={data}
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

        <View
          style={[ProfileStyle.SectionAvtRight, {justifyContent: 'center'}]}>
          <Image
            source={{uri: 'https://via.placeholder.com/150/92c952'}}
            // source={{uri: image}}
            style={Style.images}
          />
        </View>
      </View>
    );
  }
}
