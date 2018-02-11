import React from 'react'
import {StyleSheet, View, Text, TextInput, Image, TouchableHighlight} from 'react-native'

export default class InputLayout extends React.Component {
  render() {
    const {showDatePicker, labelText, placeholder, value, containerStyle} = this.props 
    return (
      <View style={containerStyle}>
        <Text>
          {labelText}
        </Text>
          <TextInput
            style={styles.input}
            value={value}
            placeholderTextColor="#8A8EAC"
            onFocus={showDatePicker}
            placeholder={placeholder}
          />
          <TouchableHighlight onPress={showDatePicker} style={styles.inputImage}>
            <Image source={require("./assets/calendar.png")} />
          </TouchableHighlight>
      </View>
    )
  }
}

const borderColor = '#979797'
const textColor = '#2B3857'

const styles = StyleSheet.create({
  input: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: borderColor,
    height: 55,
    marginTop: 10,
    paddingLeft: 26
  },
  inputImage: {
    position: 'absolute', right: 30, top: 40
  },
})