import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight, DatePickerIOS} from 'react-native'

export default class DatePickerLayout extends React.Component {
  state = {
    chosenDate: new Date()
  }

  setDate = newDate => {
    const {setInputDate} = this.props
    this.setState({chosenDate: newDate})
    setInputDate(newDate)
  }

  render() {
    const {hideDatePicker} = this.props
    return (
      <View style={styles.datePickerContainer}>
        <DatePickerIOS
            date={this.state.chosenDate}
            onDateChange={this.setDate}
            mode="date"
        />
        <View style={styles.container}>
            <TouchableHighlight onPress={hideDatePicker} style={styles.button}>
              <Text style={styles.buttonText}>Choose</Text>
            </TouchableHighlight>
        </View>
      </View> 
    )
  }
}

const borderColor = '#979797'
const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10
  },
  button: {
    width: 105,
    alignItems:'center',
    justifyContent:'center',
    height: 55,
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 100
  },
  buttonText: {
    color: '#673CFF',
    fontSize: 14,
  },
  inputImage: {
    position: 'absolute', 
    right: 30, 
    top: 40
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
})