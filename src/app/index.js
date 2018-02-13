import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import moment from 'moment'
import DatePickerLayout from '../components/DatePickerLayout'
import Buttons from '../components/Button'
import InputLayout from '../components/InputLayout'
import styles from './styles'

export default class Root extends React.Component {
  state = {
    chosenDate: new Date(),
    modalVisible: false,
    lastPeriodValue: null,
    bDayValue: null,
    forLastPeriod: false,
    forBday: false
  }
 
  showDatePickerForLastPeriod = () => {
    this.setState({
      modalVisible: true, 
      forLastPeriod: true,
      forBday: false
    })
    setTimeout(() => this.setState({ lastPeriodValue: moment().format('DD.MM.YYYY')}), 500)
  }

  showDatePickerForBday = () => {
    this.setState({
      modalVisible: true, 
      forLastPeriod: false,
      forBday: true
    })
    setTimeout(() => this.setState({ bDayValue: moment().format('DD.MM.YYYY')}), 500)
  }

  hideDatePicker = () => this.setState({
    modalVisible: false,
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
      <ScrollView style={{flex: 1}}>
        <DatePickerLayout 
          setInputDate={this.setInputDate} 
          hideDatePicker={this.hideDatePicker} 
          modalVisible={this.state.modalVisible} />
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
      </ScrollView>
    )
  }
}

