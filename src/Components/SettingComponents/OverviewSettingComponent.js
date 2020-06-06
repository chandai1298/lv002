import React from 'react';
import {Switch, Text, View, StyleSheet} from 'react-native';
import Styles from '../../CommonStyles/Styles';

// Component tong quan trong setting
export default class OverviewSettingComponent extends React.Component {
  state = {switchValue: false};
  toggleSwitch = (value) => {
    this.setState({switchValue: value});
  };
  render() {
    return (
      <View>
        <Text style={Styles.title}>Tổng quan</Text>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Âm thanh</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Thông báo khích lệ</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Bài tập nói</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={Styles.flexDirectionRow}>
          <Text style={Styles.flexDirectionRowItem}>Bài tập nghe</Text>
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
      </View>
    );
  }
}
