/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ZoomableImage from './components/ZoomableImage';

const backgroundImage = require('./res/bg.jpeg');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {isFullScreen: false};
  }

  _onImagePress() {
    let newState = !this.state.isFullScreen;
    this.setState({isFullScreen: newState});
  }

  render() {
    let containerStyle = this.state.isFullScreen ? styles.imageContainerFull : styles.imageContainerNormal;
    let imgUrl = 'bg.jpeg';
    return (
      <View style={styles.container}>
        <ZoomableImage imageWidth={100} imageHeight={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  imageContainerFull: {
    flex: 1,
    alignItems: 'stretch',
    // alignSelf: 'stretch',
  },
  imageContainerNormal: {
    flex: 1,
  },
  image: {
    // flex: 1,
  }
});
