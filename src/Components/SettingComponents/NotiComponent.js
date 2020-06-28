import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';
import {Style} from '../../CommonStyles';

// Component tong quan trong setting
export default class NotiComponent extends React.Component {
  state = {switchValue: false};
  toggleSwitch = (value) => {
    this.setState({switchValue: value});
  };
  render() {
    return (
      <View>
        <Text style={Style.title}>Thông báo</Text>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Nhắc nhở luyện tập</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Bảng xếp hạng</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Bảo vệ Streak</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>Người theo dõi</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Style.flexDirectionRow}>
          <Text style={Style.flexDirectionRowItem}>
            Bạn bè vượt xếp hạng của tôi
          </Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
      </View>
    );
  }
}
