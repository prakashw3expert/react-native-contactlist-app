import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import LoginScreen from './login.js'
import Home from '../home/home.js'

const AuthStack = StackNavigator({
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
  initialRouteName:'LoginScreen',
  navigationOptions: { }
});

export default AuthStack;
