import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import GradientButton from './GradientButton'

export default class Buttons extends React.Component {
  state = {
    buttons: [
      {text: 'Pregnant', selected: true},
      {text: 'Partner', selected: false},
      {text: 'Testing', selected: false},
    ]
  }

  pressButton = index => {
    const {buttons} = this.state
    buttons.map(b => b.selected = false)
    buttons[index].selected = true
    this.setState({selected: true})
  }

  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.selectingText}>I am:</Text>
          <View style={styles.buttonContainer}>
          {
            this.state.buttons.map((button, index) => {
              return button.selected ? 
              <GradientButton key={index} text={button.text} /> :
              <TouchableHighlight 
                onPress={() => this.pressButton(index)} 
                key={index} 
                style={styles.button}>
                <Text style={styles.buttonText}>{button.text}</Text>
              </TouchableHighlight>
            })
          }
          </View>
      </View>
    )
  }
}

const borderColor = '#979797'
const textColor = '#2B3857'
const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
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
  }
})