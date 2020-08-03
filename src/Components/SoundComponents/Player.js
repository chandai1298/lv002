import React, {Component} from 'react';
import {View, StatusBar, ActivityIndicator} from 'react-native';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      repeatOn: false,
      shuffleOn: false,
    };
  }

  setDuration(data) {
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time,
      paused: false,
    });
  }

  render() {
    const track = this.props.tracks;
    const video = this.state.isChanging ? null : (
      <Video
        source={{uri: track}}
        ref="audioElement"
        paused={this.state.paused}
        resizeMode="cover"
        // repeat={true} // Repeat forever.
        onLoadStart={this.loadStart} // Callback when video starts to load
        onLoad={this.setDuration.bind(this)} // Callback when video loads
        onProgress={this.setTime.bind(this)} // Callback every ~250ms with currentTime
        onEnd={this.onEnd} // Callback when playback finishes
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.audioElement}
      />
    );

    return (
      <View
        style={{
          backgroundColor: '#f1f3f4',
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 250,
          height: 60,
          flexDirection: 'row',
          width: '100%',
          padding: 10,
          // flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden={true} />

        <View style={{marginLeft: 25}}>
          <Controls
            onPressPlay={() => this.setState({paused: false})}
            onPressPause={() => this.setState({paused: true})}
            paused={this.state.paused}
          />
        </View>
        <View>
          <SeekBar
            onSeek={this.seek.bind(this)}
            trackLength={this.state.totalLength}
            onSlidingStart={() => this.setState({paused: true})}
            currentPosition={this.state.currentPosition}
          />
        </View>
        {video}
      </View>
    );
  }
}

const styles = {};
