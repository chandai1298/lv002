import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';
import {Style} from '../../CommonStyles';

// Component tong quan trong setting
export default class OverviewSettingComponent extends React.Component {
  state = {switchValue: false};
  toggleSwitch = (value) => {
    this.setState({switchValue: value});
  };
  render() {
    return (
      <View>
        <Text style={Style.title}>Tổng quan</Text>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Âm thanh</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Thông báo khích lệ</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Bài tập nói</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Bài tập nghe</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
      </View>
    );
  }
}
