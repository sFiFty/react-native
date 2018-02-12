import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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