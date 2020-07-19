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
import HeaderHome from '../Components/HomeComponents/HeaderHome';
import HomeItem from '../Components/HomeComponents/HomeItem';
import {IN4_APP} from '../../server/ConnectServer/In4App';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.requestAPIPhotos();
  }
  requestAPIPhotos = () => {
    const apiURL = IN4_APP.getDataApp_Home;
    fetch(apiURL)
      .then((res) => res.json())
      .then((results) => {
        this.setState({
          loading: false,
          data: results,
        });
      })
      .catch((error) => {
        console.log('err', error);
        this.setState({
          loading: false,
        });
      });
  };

  render() {
    let {data, loading} = this.state;
    let {icon1, icon2, icon3, icon4, navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" hidden={true} />
        <HeaderHome icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />

        <View style={Style.coverCenter}>
          {loading ? (
            <ActivityIndicator size="large" color="0000ff" />
          ) : (
            <FlatList
              style={{width: DIMENSION.width, marginTop: 40}}
              data={data}
              renderItem={({item}) => (
                <HomeItem
                  id_category={item.id}
                  title={item.name}
                  navigation={navigation}
                  desComponent={item.link}
                />
              )}
              keyExtractor={(item) => `${item.id}`}
            />
          )}
        </View>
      </View>
    );
  }
}
