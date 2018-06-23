import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import OnboardName from './onboardName.js'
import OnboardOrgnization from './onboardOrgnization.js'
import OnboardPosition from './onboardPosition.js'
import OnboardChooseHandle from './onboardChooseHandle.js'
import PrivacyPolicy from './privacyPolicy.js'

const AuthStack = createStackNavigator({
  OnboardName: {
  	screen: OnboardName,
  	navigationOptions: {
  		title: ''
  	}
  },
  OnboardOrgnization: {
  	screen: OnboardOrgnization,
  	navigationOptions: {
  		title: ''
  	}
  },
  OnboardPosition: {
  	screen: OnboardPosition,
  	navigationOptions: {
  		title: ''
  	}
  },
  OnboardChooseHandle: {
  	screen: OnboardChooseHandle,
  	navigationOptions: {
  		title: ''
  	}
  },
  PrivacyPolicy: {
  	screen: PrivacyPolicy,
  	navigationOptions: {
  		title: 'Privacy Policy'
  	}
  }
  }, {
  headerMode: 'screen',
  initialRouteName:'OnboardName',
  navigationOptions: { }
});

export default AuthStack;
