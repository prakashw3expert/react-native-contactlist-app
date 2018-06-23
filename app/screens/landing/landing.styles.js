import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
  title: {
    fontSize: Metrics.screenWidth * 0.08,
    width: (Platform.OS === 'ios') ? '43%': '50%',
    textAlign: 'center',
    paddingBottom: 20,
		fontFamily: Fonts.type.displayRegular
  },
  btnContinue: {
    position: 'absolute',
    bottom: 60,
		backgroundColor: Colors.blueTheme,
    width: '75%',
    borderRadius: 4,
    justifyContent: 'center',
    alignSelf: 'center',
		height: Metrics.screenHeight * 0.08
  },
	txtContinue: {
		color:'#fff',
		fontSize: 16,
		fontFamily: Fonts.type.SFTextSemibold
	}
});
