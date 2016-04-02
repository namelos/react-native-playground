import React, {
  StyleSheet, Text, View }
from 'react-native'

export default ({ main, description, temp }) => <View>
  <Text style={ styles.bigText }>
    { main }
  </Text>
  <Text style={ styles.mainText }>
    Current conditions: { description }
  </Text>
  <Text style={ styles.bigText }>
    { temp }˚F
  </Text>
</View>

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
