import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';
import Styles from '../../CommonStyles/Styles';

// Component tong quan trong setting
export default class NotiComponent extends React.Component {
  state = {switchValue: false};
  toggleSwitch = (value) => {
    this.setState({switchValue: value});
  };
  render() {
    return (
      <View>
        <Text style={Styles.title}>Thông báo</Text>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Nhắc nhở luyện tập</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Bảng xếp hạng</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Bảo vệ Streak</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Người theo dõi</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>
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
