import React, { Component } from 'react'
import { Text, View, TextInput, Platform, Keyboard, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Content, Item, Button } from 'native-base';
import PhoneInput from 'react-native-phone-input';
import { Fonts, Metrics, Colors } from '../../themes/'
import styles from'./onboard.styles.js'
import PhoneShakeButton from  '../phoneShakeButton/'

class OnboardComponent extends Component {
	constructor() {
		super();
		this.state = {
      name: '',
			keyboardHeight: 0
		};
    this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit() {
    Keyboard.dismiss();
    this.props.handleSubmit()
    //this.props.navigation.navigate('HomeScreen')
  }

	render() {
    let disabled = this.props.value.length < 2
		let bottom = { bottom: this.state.keyboardHeight }
		let btnStyle = (disabled) ? [styles.btnContinue, bottom, { backgroundColor: Colors.lightBlueTheme }] : [styles.btnContinue, bottom]
    return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
      <Content contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.topTitle}>
          {this.props.titleText}
        </Text>

        <Item style={styles.itemStyle}>
          <TextInput
						ref={(ref) => this.emailInput = ref }
            style={[styles.textInput, { paddingBottom: (Platform.OS === 'ios') ? 0 : 10, width:'100%', paddingLeft:0, textAlign:'center' }]}
            placeholder={this.props.placeholder}
						value={this.props.value}
            keyboardType='default'
						placeholderTextColor='rgba(0, 0, 0, 0.5)'
            returnKeyType={'go'}
						autoFocus
            autoCorrect={false}
						underlineColorAndroid='transparent'
						autoCapitalize={'none'}
            enablesReturnKeyAutomatically
						onSubmitEditing={this.handleSubmit}
            onChangeText={(text) => this.props.onChangeText(text)}
            />
        </Item>

        <Text style={styles.infoText}>
          {this.props.informationText}
        </Text>

				<PhoneShakeButton
					disabled={disabled}
					onPress={() => this.handleSubmit()}
					text='Continue'
					bottomHeight={this.props.keyboardHeight}/>

      </Content>
		</View>
    );
	}
}



export default OnboardComponent;
