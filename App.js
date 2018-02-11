import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight, TextInput, Image, DatePickerIOS} from 'react-native'
import moment from 'moment'
import DatePickerLayout from './DatePickerLayout'
import Buttons from './Buttons'
import InputLayout from './InputLayout'

export default class App extends React.Component {
  state = {
    chosenDate: new Date(),
    showCalendar: false,
    lastPeriodValue: null,
    bDayValue: null,
    forLastPeriod: false,
    forBday: false
  }

  showDatePickerForLastPeriod = () => this.setState({
    showCalendar: true, 
    forLastPeriod: true,
    forBday: false
  })

  showDatePickerForBday = () => this.setState({
    showCalendar: true, 
    forLastPeriod: false,
    forBday: true
  })

  hideDatePicker = () => this.setState({
    showCalendar: false,
    forLastPeriod: false,
    forBday: false
  })

  selectDate = () => {
    this.setState({showCalendar: false})
  }

  setInputDate = newDate => {
    if (this.state.forLastPeriod) {
      this.setState({lastPeriodValue: moment(newDate).format('DD.MM.YYYY')})
    } else {
      this.setState({bDayValue: moment(newDate).format('DD.MM.YYYY')})
    }
    
  }
  render() {
    const {showCalendar, lastPeriodValue, bDayValue} = this.state
    return (
      <View style={{flex: 1}}>
        {
          showCalendar ? 
          <DatePickerLayout setInputDate={this.setInputDate} hideDatePicker={this.hideDatePicker} /> :
          <View style={styles.container}>
            <Text style={styles.heading}>Fun that vou want to use </Text>
            <Buttons />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>Välkommen. Det är lätt att komma igång! Om du är gravid och vet ditt beräknade förlossningsdatum anger du det. Om du inte vet så räknar appen ut det åt dig. Om du redan har barn anger du ditt barns födelsedag. (Du kan lägga till flera barn senare) </Text>
            </View>

            <InputLayout 
              containerStyle={{marginTop: 40}}
              value={lastPeriodValue}
              showDatePicker={this.showDatePickerForLastPeriod} 
              labelText="Help me calculate date of birth:"
              placeholder="The first day of your last period" />

            <InputLayout 
              containerStyle={{marginTop: 30}}
              value={bDayValue}
              showDatePicker={this.showDatePickerForBday} 
              labelText="Calculated birthday:" />

            <View style={{ marginTop: 20  }}>
              <Text style={styles.bottomText}>
                I don’t have any children but would like to try the app
              </Text>
            </View>
          </View>
        }
      </View>
    )
  }
}

const textColor = '#2B3857'
const borderColor = '#979797'
const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 39,
    flex: 1
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    color: textColor,
  },
  descriptionContainer: {
    marginTop: 30
  },
  descriptionText: {
    color: textColor,
    fontSize: 13,
    lineHeight: 24,
    paddingRight: 10
  },
  bottomText: {
    fontSize: 12, 
    textDecorationLine: 'underline'
  }
})