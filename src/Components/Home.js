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
import HeaderHome from './HomeComponents/HeaderHome';
import HomeItem from './HomeComponents/HomeItem';

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
    let {data, loading} = this.state;
    let {icon1, icon2, icon3, icon4, navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <HeaderHome icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />

        <View style={Style.coverCenter}>
          {loading ? (
            <ActivityIndicator size="large" color="0000ff" />
          ) : (
            <FlatList
              style={{width: DIMENSION.width}}
              data={data}
              renderItem={({item}) => (
                <HomeItem
                  icon="book"
                  title={item.title}
                  navigation={navigation}
                  desComponent="Setting"
                />
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}
