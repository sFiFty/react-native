import {StyleSheet, Dimensions} from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10 / 375 * width
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
  },
  inputImage: {
    position: 'absolute', 
    right: 30 / 375 * width, 
    top: 40 / 375 * width
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
})