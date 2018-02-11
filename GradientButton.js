import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import {LinearGradient} from 'expo'

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
              style={styles.gradient}
            >
            <TouchableHighlight>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableHighlight>
            </LinearGradient>
        </View>
      </View>
    )
  }
}

const borderColor = '#979797'
const textColor = '#2B3857'

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.1,
    elevation: 1,
  },
  button: {
    width: 105,
    height: 55,
    borderRadius: 100,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,     
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
})