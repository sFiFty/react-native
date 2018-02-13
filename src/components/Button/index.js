import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import GradientButton from '../GradientButton'
import styles from './styles'

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

