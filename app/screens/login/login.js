import React, { Component } from 'react'
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Content, Item, Button } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import { Fonts, Metrics, Colors } from '../../themes/'
import styles from './login.styles.js'
import PhoneShakeButton from  '../../components/phoneShakeButton/'

class Login extends Component {
	constructor() {
		super();
		this.state = {
      phoneNumber: '9024503444',
      isPhoneSelected: true,
      email: '',
			contryCodeItemWidth: 80,
			keyboardHeight: (Platform.OS === 'ios') ? Metrics.screenHeight * 0.346 : 15
		};
		this.submitEmail = this.submitEmail.bind(this);
		this.onSelectCountry = this.onSelectCountry.bind(this);
		this.keyboardDidShow = this.keyboardDidShow.bind(this);
	}

	componentWillMount () {
		if(Platform.OS === 'ios')
    	this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
  }

  componentWillUnmount () {
		if(Platform.OS === 'ios')
    	this.keyboardDidShowListener.remove()
  }

  keyboardDidShow = (e) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = e.endCoordinates.height
    this.setState({
      keyboardHeight: newSize + 15
    })

  }

  handleSubmit() {
    // Keyboard.dismiss();
    this.props.navigation.navigate('Verification', { keyboardHeight: this.state.keyboardHeight })
  }

  async toggleButton() {
		this.setState({ isPhoneSelected: !this.state.isPhoneSelected, email: '', phoneNumber: '' })
  }

	validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	submitEmail() {
		let isValid = this.validateEmail(this.state.email)
		if(isValid) {
			this.props.navigation.navigate('HomeScreen')
		} else {
			alert('Invalid email')
		}
	}

	onSelectCountry(iso2) {
		var countryCode = this.phone.getCountryCode()
		if(countryCode.length > 2) {
			this.setState({ contryCodeItemWidth: 100})
		} else {
			this.setState({ contryCodeItemWidth: 80})
		}
	}

  renderInput() {
    if(this.state.isPhoneSelected) {
      return(
        <Item style={styles.itemStyle}>
          <PhoneInput
            ref={(ref) => {
              this.phone = ref;
            }}
            textStyle={{ paddingBottom: (Platform.OS === 'ios') ? 0 : 3, color:Colors.blueTheme }}
            initialCountry='in' //us
            textProps={{
							editable: false,
							fontSize: Metrics.screenWidth * 0.048,
							fontFamily: Fonts.type.medium,
							marginTop:3,
							height:45
						}}
						offset={5}
						isoStyle={{ fontSize: Metrics.screenWidth * 0.048, fontFamily: Fonts.type.SFTextRegular, color:Colors.blueTheme }}
            pickerButtonColor='rgb(70,70,70)'
            style={{ paddingLeft:0, width:this.state.contryCodeItemWidth, paddingTop:-1 }}
						onSelectCountry={this.onSelectCountry}
          />

          <TextInput
						ref={(ref) => this.phoneInput = ref }
            style={[styles.phoneTextInput, { paddingBottom: (Platform.OS === 'ios') ? 0 : 10 }]}
            placeholder='Mobile Number'
            placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            maxLength={10}
						autoFocus
						underlineColorAndroid='transparent'
            keyboardType='numeric'
						value={this.state.phoneNumber}
            onChangeText={(text) => this.setState({ phoneNumber: text})}
            />
        </Item>
      );
    } else {
      return(
        <Item style={styles.itemStyle}>
          <TextInput
						ref={(ref) => this.emailInput = ref }
            style={[styles.phoneTextInput, { paddingBottom: (Platform.OS === 'ios') ? 0 : 10, width:'100%', paddingLeft:0, textAlign:'center' }]}
            placeholder='Email Address'
						value={this.state.email}
            keyboardType='email-address'
						placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
            returnKeyType={'go'}
						autoFocus
						autoCorrect={false}
						underlineColorAndroid='transparent'
						autoCapitalize={'none'}
            enablesReturnKeyAutomatically
						onSubmitEditing={this.submitEmail}
            onChangeText={(text) => this.setState({ email: text})}
            />
        </Item>
      );
    }
  }

	render() {
    let disabled = this.state.phoneNumber.length < 10
    let verificationType = (this.state.isPhoneSelected) ? 'SMS' : 'EMAIL'
    return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
      <Content contentContainerStyle={styles.container} bounces={false}>
        <Text style={[styles.topTitle, { width: (Platform.OS === 'ios') ? (this.state.isPhoneSelected) ? '46%' : '50%' : '50%' }]}>
          {(this.state.isPhoneSelected) ? `What's your mobile number?` : `What’s your email?`}
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => this.toggleButton()}>
          <Text style={styles.link}>
            {(this.state.isPhoneSelected) ? 'Use email instead' : 'Use phone instead'}
          </Text>
        </TouchableOpacity>

        {this.renderInput()}

        <Text style={styles.infoText}>
          {`We'll send you an ${verificationType} verification code`}
        </Text>

        <PhoneShakeButton
					disabled={disabled}
					onPress={() => this.handleSubmit()}
					text='Continue'
					bottomHeight={this.state.keyboardHeight} />

      </Content>
		</View>
    );
	}
}



export default Login;
