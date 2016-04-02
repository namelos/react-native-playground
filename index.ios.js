import React, {
  AppRegistry, Component, StyleSheet,
  Text, View, TextInput, TouchableHighlight }
from 'react-native'

import WeatherProject from './WeatherProject'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  touchable: {
    borderRadius: 100
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: 'center'
  }
})

class Rn extends Component {
  state = { pressing: false }

  _onPressingIn = () =>
    this.setState({ pressing: true })

  _onPressOut = () =>
    this.setState({ pressing: false })

  render = () => <View style={ styles.container }>
    <TouchableHighlight
      onPressIn={ this._onPressingIn }
      onPressOut={ this._onPressOut }
      style={ styles.touchable }>
      <View style={ styles.button }>
        <Text style={ styles.welcome }>
          { this.state.pressing ? 'EEK!' : 'PUSH ME' }
        </Text>
      </View>
    </TouchableHighlight>
  </View>
}

AppRegistry.registerComponent('Rn', () => Rn)