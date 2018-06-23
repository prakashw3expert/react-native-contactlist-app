import React, { Component } from 'react'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { createStackNavigator } from 'react-navigation'
import Landing from '../landing/landing.js'
import LoginScreen from './login.js'
import Verification from './verifyOtp/verifyOtp.js'
import Home from '../home/home.js'
import OnboardStack from '../onboard/onboard.stack.js'

const AuthStack = createStackNavigator({
  LandingScreen: {
  	screen: Landing,
  	navigationOptions: {
  		title: 'Landing'
  	}
  },
  LoginScreen: {
  	screen: LoginScreen,
  	navigationOptions: {
  		title: 'Login'
  	}
  },
  Verification: {
  	screen: Verification,
  	navigationOptions: {
  		title: 'Verification'
  	}
  },
  OnboardStack: {
  	screen: OnboardStack,
  	navigationOptions: {
  		title: 'OnboardStack'
  	}
  }
  }, {
  headerMode: 'none',
  initialRouteName:'LandingScreen',
  navigationOptions: { }
});

export default AuthStack;
