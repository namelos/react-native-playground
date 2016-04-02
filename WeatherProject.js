import React, {
  Component, StyleSheet,
  Text, View, TextInput
} from 'react-native'

import Forecast from './Forecast'

export default class WeatherProject extends Component {
  state = {
    zip: '',
    forecast: {
      main: 'Clouds',
      description: 'few clouds',
      temp: 45.7
    }
  }

  handleTextChange = e => {
    console.log(e.nativeEvent.text)
    this.setState({
      zip: e.nativeEvent.text
    })
  }

  render() {
    const { forecast } = this.state

    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>
          You input { this.state.zip }
        </Text>
        <Forecast { ...forecast } />
        <TextInput style={ styles.input }
                   returnKeyType='go'
                   onSubmitEditing={ this.handleTextChange } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
})
