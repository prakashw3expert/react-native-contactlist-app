import React, { Component } from 'react'
import { Keyboard, Platform, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Icon } from 'native-base'
import { Fonts, Metrics, Colors } from '../../themes/'
import styles from './onboard.styles.js'
import PhoneShakeButton from  '../../components/phoneShakeButton/'

class PrivacyPolicy extends Component {
  static navigationOptions = {
		headerStyle: {
       backgroundColor: '#fff',
			 borderBottomWidth: 0,
       elevation: null
		},
    headerTitleStyle: {
      fontFamily: Fonts.type.SFTextRegular,
      fontWeight: "200",
      fontSize: 20
    },
  }
	constructor() {
		super();
		this.state = {
      checked: false
		};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
	}

  handleSubmit() {
    Keyboard.dismiss();
  }

  toggleCheckbox() {
    this.setState({ checked: !this.state.checked})
  }

	render() {

    let disabled = !this.state.checked
    let btnStyle = (disabled) ? [styles.btnContinue, { backgroundColor: Colors.lightBlueTheme }] : styles.btnContinue
    let iconStyle = (disabled) ? styles.iconStyleUnfilled : styles.iconStyleFilled
    return (
			<Container style={styles.container}>
        <Content style={styles.content}>
          <View style={{paddingTop: 22}}>
          <Text style={styles.heading}>1. First Clause</Text>
          <Text style={styles.description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.

          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32.</Text>
          </View>
        </Content>

        <View style={styles.bottomView}>
          <View style={styles.bottomItems}>
            <TouchableOpacity onPress={this.toggleCheckbox} style={styles.checkbox}>
              <Icon name={(this.state.checked) ? 'md-checkbox' : 'md-square-outline'} style={iconStyle}/>
            </TouchableOpacity>
            <Text style={(disabled) ? styles.bottomTextInctive : styles.bottomTextActive}>Accept </Text>
            <Text style={(disabled) ? styles.bottomTextMuted : styles.bottomText}>Privacy Policy </Text>
            <Text style={(disabled) ? styles.bottomTextInctive : styles.bottomTextActive}>and </Text>
            <Text style={(disabled) ? styles.bottomTextMuted : styles.bottomText}>Terms of Service</Text>
          </View>
          <PhoneShakeButton
            disabled={disabled}
            onPress={() => this.handleSubmit()}
            text='Continue'/>
        </View>
      </Container>
    );
	}
}


export default PrivacyPolicy;
