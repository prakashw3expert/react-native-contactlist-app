import React, { Component } from 'react'
import { Keyboard, Platform } from 'react-native';
import { Fonts, Metrics, Colors } from '../../themes/'
import Onboard from '../../components/onboard/onboard.js'

class ChooseHandle extends Component {
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
      handle: 'tarun.bardawa'
		};
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit() {
    Keyboard.dismiss();
    const keyboardHeight = this.props.navigation.state.params.keyboardHeight
    this.props.navigation.navigate('PrivacyPolicy', { keyboardHeight })
  }

	render() {
    let disabled = this.state.handle.length < 2
    let width = (Platform.OS === 'ios') ? '60%' : '50%'
    return (
			<Onboard
        titleText={`Choose a @Handle,\nyour unique name for sharing\nyour contact with anyone`}
        titleWidth={width}
        placeholder='Handle'
        value={this.state.handle}
        keyboardHeight={this.props.navigation.state.params.keyboardHeight}
        informationText={'phoneshake.me/@' + this.state.handle}
        onChangeText={(handle) => this.setState({handle})}
        handleSubmit={this.handleSubmit}
        />
    );
	}
}



export default ChooseHandle;
