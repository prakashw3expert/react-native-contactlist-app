import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native';
import { Fonts, Metrics, Colors } from '../../themes/'
import Onboard from '../../components/onboard/onboard.js'

class OnboardName extends Component {
	static navigationOptions = {
		headerStyle: {
       backgroundColor: '#fff',
			 borderBottomWidth: 0,
       elevation: null
		 },
  }
	constructor() {
		super();
		this.state = {
      name: 'Tarun Bardawa',
			visibleHeight: 0
		};
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit() {
    // Keyboard.dismiss();
		const keyboardHeight = this.props.navigation.state.params.keyboardHeight
    this.props.navigation.navigate('OnboardOrgnization', { keyboardHeight })
  }

	render() {
    let disabled = this.state.name.length < 2
    let width = (Platform.OS === 'ios') ? '46%' : '50%'
    return (
			<Onboard
        titleText='What’s you name?'
        titleWidth={width}
        placeholder='Full Name'
        value={this.state.name}
				keyboardHeight={this.props.navigation.state.params.keyboardHeight}
        informationText='Add your first and last name'
        onChangeText={(name) => this.setState({name})}
        handleSubmit={this.handleSubmit}
        />
    );
	}
}



export default OnboardName;
