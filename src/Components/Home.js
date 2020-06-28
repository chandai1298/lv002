import React from 'react';
import {Text, View, StatusBar, Image, FlatList} from 'react-native';
import {Style, DIMENSION} from '../CommonStyles';
import HeaderHome from './HomeComponents/HeaderHome';

const Items = ({title, thumbnailUrl}) => (
  <View style={[Style.coverCenter, {padding: 10}]}>
    <Image source={{uri: thumbnailUrl}} style={Style.images} />
    <Text style={Style.text15}>Hello {title}</Text>
  </View>
);

export default class Home extends React.Component {
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
          data: resJson,
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
    let {icon1, icon2, icon3, icon4} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <HeaderHome icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />

        <View style={Style.coverCenter}>
          <FlatList
            style={{width: DIMENSION.width}}
            data={data}
            renderItem={({item}) => (
              <Items thumbnailUrl={item.thumbnailUrl} title={item.id} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}
