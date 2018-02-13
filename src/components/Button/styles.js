import {StyleSheet, Dimensions} from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    marginTop: 50 / 375 * width,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10 / 375 * width,
  },
  button: {
    width: 105 / 375 * width,
    alignItems:'center',
    justifyContent:'center',
    height: 55 / 375 * width,
    borderColor: '#979797',
    borderWidth: 1,
    borderRadius: 100
  },
  buttonText: {
    color: '#673CFF',
    fontSize: 14 / 375 * width,
  }
})