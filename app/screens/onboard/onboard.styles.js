import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
  topTitle: {
    fontSize: Metrics.screenWidth * 0.053,
    textAlign: 'center',
    paddingBottom: 20,
		fontFamily: Fonts.type.SFTextMedium
  },
	bottomView: {
		alignItems:'center',
		justifyContent:'center',
		width: '100%',
		backgroundColor: '#fff',
		paddingTop: 20,
		paddingBottom: 15
	},
	iconStyleUnfilled: {
		color: 'rgba(0, 0, 0, 0.34)',
		fontSize: 22
	},
	iconStyleFilled: {
		color: Colors.blueTheme,
		fontSize: 22
	},
	checkbox: {
		marginRight: 10
	},
	bottomTextInctive: {
		fontSize: 12,
		color: Colors.lightBlack,
		fontFamily: Fonts.type.SFTextRegular
	},
	bottomTextActive: {
		fontSize: 12,
		fontFamily: Fonts.type.SFTextRegular
	},
	bottomTextMuted: {
		fontSize: 12,
		color: Colors.lightBlueTheme,
		fontFamily: Fonts.type.SFTextRegular
	},
	bottomText: {
		fontSize: 12,
		color: Colors.blueTheme,
		fontFamily: Fonts.type.SFTextRegular
	},
	bottomItems: {
		flexDirection: 'row',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		paddingHorizontal: 12,
	},
	heading: {
		fontSize: 12,
		color: Colors.lightBlack,
		fontFamily: Fonts.type.SFTextSemibold,
		marginBottom: 8
	},
	description: {
		fontSize: 14,
		color: '#000',
		fontFamily: Fonts.type.SFTextRegular
	}
});
