import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
    paddingTop: Metrics.screenHeight * 0.15,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
  topTitle: {
    fontSize: Metrics.screenWidth * 0.048,
    width: (Platform.OS === 'ios') ? '40%': '50%',
    textAlign: 'center',
    paddingBottom: 5,
		fontFamily: Fonts.type.heavy
  },
  link: {
    fontSize: Metrics.screenWidth * 0.032,
    color: '#319AF8',
		fontFamily: Fonts.type.medium
  },
  infoText: {
    fontSize: 10,
    textAlign: 'left',
		fontFamily: Fonts.type.medium
  },
  btnContinue: {
    width: '50%',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
	itemStyle: {
		width: '70%',
		height: (Platform.OS === 'ios') ? Metrics.screenHeight * 0.052: Metrics.screenHeight * 0.07
	},
	txtContinue: {
		color:'#fff',
		fontSize: 16,
		fontFamily: Fonts.type.medium
	}
});
