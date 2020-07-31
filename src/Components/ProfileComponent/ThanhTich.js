import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Style, ProfileStyle, DIMENSION} from '../../CommonStyles';
import * as Progress from 'react-native-progress';
import {LinearTextGradient} from 'react-native-text-gradient';

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

export default class ThanhTich extends Component {
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
    return (
      <View>
        <FlatList
          style={{width: DIMENSION.width}}
          data={data}
          renderItem={({item}) => (
            <Items thumbnailUrl={item.thumbnailUrl} title={item.title} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
