import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
    paddingTop: Metrics.screenHeight * 0.11,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
  topTitle: {
    fontSize: Metrics.screenWidth * 0.048,
    width: (Platform.OS === 'ios') ? '43%': '50%',
    textAlign: 'center',
    paddingBottom: 20,
		color: '#2C3137',
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
		fontFamily: Fonts.type.medium,
		color: '#1A1E21'
  },
  btnContinue: {
		backgroundColor: '#319AF8',
		marginTop: 5,
    width: '50%',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
		height: Metrics.screenHeight * 0.067
  },
	itemStyle: {
		width: '70%',
		height: (Platform.OS === 'ios') ? Metrics.screenHeight * 0.052: Metrics.screenHeight * 0.07,
		borderBottomWidth: 1,
		borderBottomColor: '#CED4DA'
	},
	txtContinue: {
		color:'#fff',
		fontSize: 16,
		fontFamily: Fonts.type.heavy
	},
	linkButton: {
		alignSelf: 'center',
		marginBottom: Metrics.screenHeight * 0.105
	},
	phoneTextInput: {
		width:'100%',
		paddingLeft:0,
		color:'#1A1E21',
		fontSize: Metrics.screenWidth * 0.042,
		fontFamily: Fonts.type.medium
	},
	separatorStyle: {
		position: 'absolute',
		height: 16,
		backgroundColor: '#CED4DA',
		width:1
	}
});
