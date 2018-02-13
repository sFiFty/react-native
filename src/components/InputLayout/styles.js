import {StyleSheet, Dimensions} from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  input: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#979797',
    height: 55 / 375 * width,
    marginTop: 10 / 375 * width,
    paddingLeft: 26 / 375 * width,
    justifyContent:'center'
  },
  inputText: {
    color: '#8A8EAC',
    fontSize: 14 / 375 * width,
  },
  inputImage: {
    position: 'absolute', 
    right: 30 / 375 * width, 
    top: 40 / 375 * width
  },
})