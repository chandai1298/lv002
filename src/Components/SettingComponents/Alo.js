import React, {Component} from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  render() {
    return (
      <Animatable.View>
        <ScrollView>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View>
              <Text>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
        </ScrollView>
      </Animatable.View>
    );
  }
}
