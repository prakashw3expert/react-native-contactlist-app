import React, { Component } from 'react'
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { Content, Item, Button } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import { Fonts, Metrics, Colors } from '../../../themes/'
import styles from'../login.styles.js'
import PhoneShakeButton from  '../../../components/phoneShakeButton/'

class VerifyOTP extends Component {
	constructor() {
		super();
		this.state = {
      otp: '123456',
      incorrectOtp: false
		};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dontReceiveCode = this.dontReceiveCode.bind(this);
	}

  handleSubmit() {
    // Keyboard.dismiss();
		const keyboardHeight = this.props.navigation.state.params.keyboardHeight
    this.props.navigation.navigate('OnboardStack', { keyboardHeight })
  }

  dontReceiveCode() {

  }

	render() {
    let disabled = this.state.otp.length < 6
    let message = (!this.state.incorrectOtp) ? 'Enter the confirmation code sent to you' : 'The code entered is incorrect'
		let btnStyle = (disabled) ? [styles.btnContinue, { backgroundColor: Colors.lightBlueTheme }] : styles.btnContinue
    return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
      <Content contentContainerStyle={styles.container} bounces={false}>
        <Text style={[styles.topTitle, { width: (Platform.OS === 'ios') ? '46%' : '50%' }]}>
          Please enter the confirmation code
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={this.dontReceiveCode}>
          <Text style={styles.link}>
            Did not receive code
          </Text>
        </TouchableOpacity>

        <Item style={styles.itemStyle}>
          <TextInput
						ref={(ref) => this.emailInput = ref }
            style={[styles.phoneTextInput, { paddingBottom: (Platform.OS === 'ios') ? 0 : 10, width:'100%', paddingLeft:0, textAlign:'center' }]}
            placeholder='Enter code'
						value={this.state.otp}
            keyboardType='numeric'
						placeholderTextColor='rgba(0, 0, 0, 0.5)'
            returnKeyType={'go'}
						autoFocus
						maxLength={6}
						underlineColorAndroid='transparent'
						autoCapitalize={'none'}
            enablesReturnKeyAutomatically
						onSubmitEditing={this.handleSubmit}
            onChangeText={(text) => this.setState({ otp: text})}
            />
        </Item>

        <Text style={[styles.infoText, { color: (this.state.incorrectOtp) ? Colors.red : 'rgba(0, 0, 0, 0.34)'}]}>
          {message}
        </Text>

				<PhoneShakeButton
					disabled={disabled}
					onPress={() => this.handleSubmit()}
					text='Continue'
					bottomHeight={this.props.navigation.state.params.keyboardHeight} />

      </Content>
		</View>
    );
	}
}



export default VerifyOTP;
