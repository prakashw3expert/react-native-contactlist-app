import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import { Fonts, Metrics, Colors } from '../../themes/'

class PhoneShakeButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    bottomHeight: PropTypes.number,
    disabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
  }

	render() {
    const { disabled, bottomHeight, text, onPress } = this.props

    if(this.props.bottomHeight) {
      return (
        <Button disabled={disabled} style={[styles.button, { bottom: bottomHeight, position: 'absolute', backgroundColor: (disabled) ? Colors.lightBlueTheme : Colors.blueTheme}]} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </Button>
      );
    }
    return (
      <Button disabled={disabled} style={[styles.button, { backgroundColor: (disabled) ? Colors.lightBlueTheme : Colors.blueTheme}]} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Button>
    );
	}
}

const styles = StyleSheet.create({
  button: {
		backgroundColor: '#319AF8',
    width: '75%',
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
		height: Metrics.screenHeight * 0.067
  },
  text: {
		color:'#fff',
		fontSize: 16,
		fontFamily: Fonts.type.SFTextSemibold
	}
})



export default PhoneShakeButton;
