import React from 'react'
import {View, Text, TouchableHighlight, DatePickerIOS, Modal} from 'react-native'
import styles from './styles'

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
    const {hideDatePicker, modalVisible} = this.props
    return (
        <Modal
          visible={modalVisible}
          animationType={'fade'}>
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
        </Modal>
    )
  }
}

