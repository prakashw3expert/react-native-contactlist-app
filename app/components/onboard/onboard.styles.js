import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
    paddingTop: Metrics.screenHeight * 0.015,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
  topTitle: {
    fontSize: Metrics.screenWidth * 0.053,
    textAlign: 'center',
    paddingBottom: 20,
		fontFamily: Fonts.type.SFTextMedium
  },
  infoText: {
		marginTop: 7,
    fontSize: 12,
    textAlign: 'center',
		fontFamily: Fonts.type.SFTextRegular,
		color: 'rgba(0, 0, 0, 0.34)'
  },
	itemStyle: {
		width: '75%',
		height: (Platform.OS === 'ios') ? Metrics.screenHeight * 0.052: Metrics.screenHeight * 0.07,
		borderBottomWidth: 0.6,
		borderBottomColor: 'rgba(0, 0, 0, 0.2)',
		paddingHorizontal: 15,
		marginTop: 55
	},
	linkButton: {
		alignSelf: 'center',
		marginBottom: Metrics.screenHeight * 0.105
	},
	textInput: {
		width:'100%',
		paddingLeft:0,
		fontSize: Metrics.screenWidth * 0.048,
		fontFamily: Fonts.type.SFTextRegular
	}
});
