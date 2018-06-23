import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native';
import { Fonts, Metrics, Colors } from '../../themes/'
import Onboard from '../../components/onboard/onboard.js'

class OnboardPosition extends Component {
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
      position: 'Engineering Manager'
		};
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit() {
    // Keyboard.dismiss();
		const keyboardHeight = this.props.navigation.state.params.keyboardHeight
    this.props.navigation.navigate('OnboardChooseHandle', { keyboardHeight })
  }

	render() {
    let disabled = this.state.position.length < 2
    return (
			<Onboard
        titleText={`What’s your\nposition/designation?`}
        placeholder='Position'
        value={this.state.position}
				keyboardHeight={this.props.navigation.state.params.keyboardHeight}
        informationText='Add your occupation title'
        onChangeText={(position) => this.setState({position})}
        handleSubmit={this.handleSubmit}
        />
    );
	}
}



export default OnboardPosition;
