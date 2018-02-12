import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
    borderColor: '#979797',
    borderWidth: 1,
    borderRadius: 100
  },
  buttonText: {
    color: '#673CFF',
    fontSize: 14,
  }
})