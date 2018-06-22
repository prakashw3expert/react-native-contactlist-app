import React, { Component } from 'react'
import { Text, View, TextInput, Platform } from 'react-native';
import { Content, Item, Button } from 'native-base';
import { Fonts, Metrics } from '../../themes/'
import styles from'./landing.styles.js'

class Landing extends Component {
	constructor() {
		super();
		this.state = {

		};
	}

  handleSubmit() {
    //this.props.navigation.navigate('HomeScreen')
  }

	render() {
    return (
			<View style={{flex:1, backgroundColor:'#fff'}}>
      <Content contentContainerStyle={styles.container} bounces={false}>
        <Text style={styles.title}>
          Welcome to PhoneShake
        </Text>
        <Button style={styles.btnContinue} onPress={() => this.handleSubmit()}>
          <Text style={styles.txtContinue}>Get Started</Text>
        </Button>}
      </Content>
		</View>
    );
	}
}

export default Landing;
