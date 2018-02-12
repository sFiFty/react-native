import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {LinearGradient} from 'expo'
import styles from './styles'

export default class GradientButton extends React.Component {
  render() {
    const {text} = this.props
    return (
      <View style={styles.shadow}>
        <View style={styles.button}>
          <LinearGradient 
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 0.0}} 
            colors={['#7E34A9', '#F63669']} 
            style={styles.gradient}>
            <TouchableHighlight>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>
      </View>
    )
  }
}
