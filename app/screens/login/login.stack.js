import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LoginScreen from './login.js'
import Home from '../home/home.js'
import Landing from '../landing/landing.js'

const AuthStack = StackNavigator({
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
  HomeScreen: {
  	screen: Home,
  	navigationOptions: {
  		title: 'Home'
  	}
  }
  }, {
  headerMode: 'none',
  initialRouteName:'LandingScreen',
  navigationOptions: { }
});

export default AuthStack;
