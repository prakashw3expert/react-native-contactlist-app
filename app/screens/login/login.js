import React, { Component } from 'react'
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity } from 'react-native';
import { Content, Item, Button } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import { Fonts, Metrics } from '../../themes/'
import styles from'./login.styles.js'

class Login extends Component {
	constructor() {
		super();
		this.state = {
      phoneNumber: '',
      isPhoneSelected: true,
      email: '',
			contryCodeItemWidth: 80
		};
		this.submitEmail = this.submitEmail.bind(this);
		this.onSelectCountry = this.onSelectCountry.bind(this);
	}

  handleSubmit() {
    Keyboard.dismiss();
    this.props.navigation.navigate('HomeScreen')
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
						// disabled
            textStyle={{ paddingBottom: (Platform.OS === 'ios') ? 0 : 3, color:'#319AF8' }}
            initialCountry='us' //in
            textProps={{
							editable: false,
							// color:'#319AF8',
							fontSize: Metrics.screenWidth * 0.042,
							fontFamily: Fonts.type.medium,
							marginTop:3,
							height:45
						}}
						offset={5}
						isoStyle={{ fontSize: Metrics.screenWidth * 0.042, fontFamily: Fonts.type.medium, color:'#319AF8', }}
            pickerButtonColor='rgb(70,70,70)'
            style={{ paddingLeft:0, width:this.state.contryCodeItemWidth, paddingTop:-1 }}
						onSelectCountry={this.onSelectCountry}
          />

					<View style={[styles.separatorStyle, { left: this.state.contryCodeItemWidth - 20}]} />

          <TextInput
						ref={(ref) => this.phoneInput = ref }
            style={[styles.phoneTextInput, { paddingBottom: (Platform.OS === 'ios') ? 0 : 10 }]}
            placeholder=''
            //placeholderTextColor={[Fonts.colors.input]}
            maxLength={10}
						autoFocus
						underlineColorAndroid='transparent'
            keyboardType='numeric'
            onChangeText={(text) => this.setState({ phoneNumber: text})}
            />
        </Item>
      );
    } else {
      return(
        <Item style={styles.itemStyle}>
          <TextInput
						ref={(ref) => this.emailInput = ref }
            style={{ paddingBottom: (Platform.OS === 'ios') ? 0 : 10, width:'100%', paddingLeft:0, textAlign:'center' }}
            placeholder=''
            keyboardType='email-address'
            returnKeyType={'go'}
						autoFocus
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
		let btnStyle = (disabled) ? [styles.btnContinue, { backgroundColor: '#B9C0C7' }] : styles.btnContinue
    return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
      <Content contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.topTitle}>
          {(this.state.isPhoneSelected) ? `What's your mobile number?` : `What’s your email?`}
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => this.toggleButton()}>
          <Text style={styles.link}>
            {(this.state.isPhoneSelected) ? 'Use email instead' : 'Use phone instead'}
          </Text>
        </TouchableOpacity>

        {this.renderInput()}

        <Item style={[styles.itemStyle, { borderBottomWidth:0, marginBottom:10 }]}>
          <Text style={styles.infoText}>
            {`We'll send you an ${verificationType} verification code`}
          </Text>
        </Item>
        {(this.state.isPhoneSelected) && <Button disabled={disabled} style={btnStyle} onPress={() => this.handleSubmit()}>
          <Text style={styles.txtContinue}>Continue</Text>
        </Button>}
      </Content>
		</View>
    );
	}
}



export default Login;
