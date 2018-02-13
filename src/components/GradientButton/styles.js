import {StyleSheet, Dimensions} from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  shadow: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 5 / 375 * width, height: 10 / 375 * width },
    shadowOpacity: 0.1,
    elevation: 1,
  },
  button: {
    width: 105 / 375 * width,
    height: 55 / 375 * width,
    borderRadius: 100 / 375 * width,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,     
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14 / 375 * width,
  },
})