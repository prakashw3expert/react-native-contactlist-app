import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Fonts, Metrics } from '../../themes/'

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
  inviteContainer: {
    justifyContent: 'center',
		alignItems: 'center',
    flex: 1
  },
  topTitle: {
    fontSize: Metrics.screenWidth * 0.048,
    width: '40%',
    textAlign: 'center',
    paddingBottom: 5
  },
  tabBorder: {
    backgroundColor: 'rgb(22, 141, 229)',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#707070',
    borderLeftColor: 'transparent'
  },
  btnAccess: {
    width: '50%',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  title: {
    fontSize: Metrics.screenWidth * 0.048,
    width: '55%',
    textAlign: 'center',
    marginBottom: Metrics.screenHeight * 0.0149,
		fontFamily: Fonts.type.heavy
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 20,
		fontFamily: Fonts.type.medium
  },
  listItem: {
    flex: 1,
    height: Metrics.screenHeight * 0.104,
    borderWidth: 0,
    borderColor: 'transparent',
    marginLeft: 0,
		paddingHorizontal: 15
  },
	tabBarTextStyle: {
		fontSize: Metrics.screenWidth * 0.037,
		marginTop: Metrics.screenHeight * 0.025,
		fontFamily: Fonts.type.medium
	},
	inputStyle: {
		width:'100%',
		//backgroundColor:'#F7F8F9',
		fontFamily: Fonts.type.book,
		fontSize: Metrics.screenWidth * 0.032,
	},
	txtAccess: {
		color:'#fff',
		fontSize: Metrics.screenWidth * 0.042,
		fontFamily: Fonts.type.heavy,
		backgroundColor: 'transparent'
	},
	userImage: {
		height: Metrics.screenWidth * 0.12,
		width: Metrics.screenWidth * 0.12,
		borderRadius: Metrics.screenWidth * 0.06
	},
	listName: {
		color:'#1A1E21',
		fontSize: Metrics.screenWidth * 0.042,
		fontFamily: Fonts.type.medium,
		backgroundColor: 'transparent',
		width: (Platform.OS === 'ios') ? '65%': '75%'
	},
	listUsername: {
		color:'#717171',
		fontSize: Metrics.screenWidth * 0.032,
		fontFamily: Fonts.type.heavy,
		backgroundColor: 'transparent'
	},
	txtInvite: {
		fontSize: Metrics.screenWidth * 0.032,
		color: '#2C3137',
		fontFamily: Fonts.type.heavy
	},
	btnInvite: {
		height: Metrics.screenHeight * 0.044,
		width: Metrics.screenWidth * 0.19,
		justifyContent: 'center',
		borderColor: '#B7BEC5'
	},
	itemStyle: {
		height: 35,
		backgroundColor: '#F7F8F9',
		borderBottomWidth: 0,
		paddingLeft: 10,
		borderRadius: 5
	},
	searchIconStyle: {
		color: '#95989A',
		fontSize: 20,
		marginTop: (Platform.OS === 'ios') ? 5: 0
	}
});
