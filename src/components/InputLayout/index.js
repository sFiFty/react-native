import React from 'react'
import {View, Text, TextInput, Image, TouchableHighlight} from 'react-native'
import styles from './styles'

export default class InputLayout extends React.Component {
  render() {
    const {showDatePicker, labelText, placeholder, value, containerStyle} = this.props 
    return (
      <View style={containerStyle}>
        <Text>
          {labelText}
        </Text>
        <TouchableHighlight underlayColor={'#fff'} onPress={showDatePicker} style={styles.input} >
          <Text style={styles.inputText}>
            {value ? value : placeholder || ''}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#fff'} onPress={showDatePicker} style={styles.inputImage}>
          <Image source={require("../../../assets/calendar.png")} />
        </TouchableHighlight>
      </View>
    )
  }
}

