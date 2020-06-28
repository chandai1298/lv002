import React from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {Style, SettingStyle} from '../CommonStyles';
import HeaderComponent from './HeaderComponent';
import OverviewSettingComponent from './SettingComponents/OverviewSettingComponent';
import NotiComponent from './SettingComponents/NotiComponent';
import In4Component from './SettingComponents/In4Component';
// class setting
export default class Setting extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {title, navigation, icon, desComponent} = this.props;
    return (
      <View>
        <HeaderComponent
          title="Cài đặt"
          icon="check"
          navigation={navigation}
          desComponent="Home"
        />

        <ScrollView horizontal={false}>
          <In4Component />
          <OverviewSettingComponent />

          <NotiComponent />
        </ScrollView>
      </View>
    );
  }
}
