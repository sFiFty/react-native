import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10
  },
  button: {
    width: 105,
    alignItems:'center',
    justifyContent:'center',
    height: 55,
    borderColor: '#979797',
    borderWidth: 1,
    borderRadius: 100
  },
  buttonText: {
    color: '#673CFF',
    fontSize: 14,
  },
  inputImage: {
    position: 'absolute', 
    right: 30, 
    top: 40
  },
  datePickerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
})