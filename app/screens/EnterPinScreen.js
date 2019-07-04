import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

class EnterPinScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit1Color: '#FFFFFF',
      digit2Color: '#FFFFFF',
      digit3Color: '#FFFFFF',
      digit4Color: '#FFFFFF',
      error: null,
      count: 0,
      success: null,
      editable: true
    };
    this.validPin = (this.props.pin !== undefined) ? this.props.pin : '7890';
  }

  addDigit1 = (digit) => {
    this.setState({
      digit1: digit,
      digit1Color: '#000000',
      error: null
    }, () => this.refs.digit2.focus());
  }

  addDigit2 = (digit) => {
    this.setState({
      digit2: digit,
      digit2Color: '#000000'
    }, () => this.refs.digit3.focus());
  }

  addDigit3 = (digit) => {
    this.setState({
      digit3: digit,
      digit3Color: '#000000'
    }, () => this.refs.digit4.focus());
  }

  addDigit4 = (digit) => {
    this.setState({
      digit4: digit,
      digit4Color: '#000000'
    }, () => this.checkPinCorrect());
  }

  checkPinCorrect = () => {
    if (this.state.count < 3) {
      let enteredPin = this.state.digit1 + this.state.digit2 + this.state.digit3 + this.state.digit4;
      if (enteredPin !== this.validPin) {
        let count = this.state.count + 1;
        this.setState({
          error: 'Password Incorrect',
          digit1Color: '#FFFFFF',
          digit2Color: '#FFFFFF',
          digit3Color: '#FFFFFF',
          digit4Color: '#FFFFFF',
          digit1: '',
          digit2: '',
          digit3: '',
          digit4: '',
          count: count
        }, () => this.refs.digit1.focus());
      }
      else {
        this.setState({ success: 'Pin is Correct!' });
      }
    }
    else {
      this.setState({
        error: 'You have entered wrong password 3 times.Will be blocked',
        editable: false
      });
    }
  }

  render = () => {
    return (
      <View style={EnterPinStyles.MainContainer}>
        <View style={EnterPinStyles.PinEnterView}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#000000' }}>Enter </Text>
              <Text style={{ color: '#000000', fontWeight: 'bold' }}>PIN </Text>
              <Text style={{ color: '#000000' }}>to unlock</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{
                borderColor: '#000000',
                backgroundColor: this.state.digit1Color,
                margin: 10,
                borderWidth: 1,
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 15
              }}
              >
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    color: this.state.digit1Color
                  }}
                  caretHidden={true}
                  editable={this.state.editable}
                  autoFocus={true}
                  keyboardType='number-pad'
                  underlineColorAndroid='transparent'
                  ref='digit1'
                  maxLength={1}
                  onChangeText={(digit) => {
                    if (digit.length === 1) {
                      this.addDigit1(digit);
                    }
                    else {
                      this.setState({
                        digit1Color: '#FFFFFF',
                        digit1: ''
                      });
                    }
                  }}
                  value={this.state.digit1}
                  returnKeyType='next'
                />
              </View>
              <View style={{
                borderColor: '#000000',
                backgroundColor: this.state.digit2Color,
                margin: 10,
                borderWidth: 1,
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 15
              }}
              >
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    color: this.state.digit2Color
                  }}
                  caretHidden={true}
                  editable={this.state.editable}
                  keyboardType='number-pad'
                  underlineColorAndroid='transparent'
                  ref='digit2'
                  maxLength={1}
                  onChangeText={(digit) => {
                    if (digit.length === 1) {
                      this.addDigit2(digit);
                    }
                    else {
                      this.setState({
                        digit2Color: '#FFFFFF',
                        digit2: ''
                      });
                    }
                  }}
                  value={this.state.digit2}
                  returnKeyType='next'
                />
              </View>
              <View style={{
                borderColor: '#000000',
                backgroundColor: this.state.digit3Color,
                margin: 10,
                borderWidth: 1,
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 15
              }}
              >
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    color: this.state.digit3Color
                  }}
                  caretHidden={true}
                  editable={this.state.editable}
                  keyboardType='number-pad'
                  underlineColorAndroid='transparent'
                  ref='digit3'
                  maxLength={1}
                  onChangeText={(digit) => {
                    if (digit.length === 1) {
                      this.addDigit3(digit);
                    }
                    else {
                      this.setState({
                        digit3Color: '#FFFFFF',
                        digit3: ''
                      });
                    }
                  }}
                  value={this.state.digit3}
                  returnKeyType='next'
                />
              </View>
              <View style={{
                borderColor: '#000000',
                backgroundColor: this.state.digit4Color,
                margin: 10,
                borderWidth: 1,
                width: 30,
                height: 30,
                alignItems: 'center',
                borderRadius: 15
              }}
              >
                <TextInput
                  style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    color: this.state.digit4Color
                  }}
                  caretHidden={true}
                  editable={this.state.editable}
                  keyboardType='number-pad'
                  underlineColorAndroid='transparent'
                  ref='digit4'
                  maxLength={1}
                  onChangeText={(digit) => {
                    if (digit.length === 1) {
                      this.addDigit4(digit);
                    }
                    else {
                      this.setState({
                        digit4Color: '#FFFFFF',
                        digit4: ''
                      });
                    }
                  }}
                  value={this.state.digit4}
                  returnKeyType='next'
                />
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#D0021B' }}>{this.state.error}</Text>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#4A90E2' }}>{this.state.success}</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 15 }}>
            <Text>Forgot PIN?</Text>
            <TouchableOpacity onPress={() => Actions.resetPin()}>
              <Text>Tap here to reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const EnterPinStyles = StyleSheet.create({
  'MainContainer': {
    flex: 1
  },
  'PinEnterView': {
    height: '95%',
    borderRadius: 5,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 4,
    // background color must be set
    backgroundColor: "#FFFFFF", // i
  },
  inputBox: {
    borderColor: '#000000',
    backgroundColor: '#000000',
    margin: 10,
    borderWidth: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    borderRadius: 15
  },
  inputs: {
    backgroundColor: 'transparent',
    fontSize: 16,
    height: 30,
    flex: 1,
    color: '#000000'
  }
});

export default EnterPinScreen;