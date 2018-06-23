import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native';
import { Fonts, Metrics, Colors } from '../../themes/'
import Onboard from '../../components/onboard/onboard.js'

class OnboardOrgnization extends Component {
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
      organization: 'Amplework Technologies'
		};
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit() {
    // Keyboard.dismiss();
		const keyboardHeight = this.props.navigation.state.params.keyboardHeight
    this.props.navigation.navigate('OnboardPosition', { keyboardHeight })
  }

	render() {
    let disabled = this.state.organization.length < 2
    return (
			<Onboard
        titleText={`What’s your\ncurrent organization?`}
        placeholder='Organization Name'
        value={this.state.organization}
				keyboardHeight={this.props.navigation.state.params.keyboardHeight}
        informationText='Add your company/organization name'
        onChangeText={(organization) => this.setState({organization})}
        handleSubmit={this.handleSubmit}
        />
    );
	}
}



export default OnboardOrgnization;
