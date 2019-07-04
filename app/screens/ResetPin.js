import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import { Actions } from 'react-native-router-flux';
import AppImage from '../utility/images';

class ResetPin extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      enterPin: '',
      confirmPin: ''
    }
  }

  resetPin = () => {
    if (this.state.enterPin === this.state.confirmPin && this.state.confirmPin !== '' && this.state.enterPin !== '') {
      Actions.enterPin({ pin: this.state.enterPin });
    }
  }

  render = () => {
    return (
      <View style={ResetPinStyles.MainContainer}>
        <View style={{ flex: 1, backgroundColor: '#000000', elevation: 1, }}>
          <View style={{ top: 17, left: 17 }}>
            <TouchableOpacity
              hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
              onPress={() => Actions.enterPin()}
            >
              <Image source={AppImage.back} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', elevation: 1, }} />
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 150,
          width: '95%',
          alignSelf: 'center',
          height: 300,
          borderRadius: 4,
          backgroundColor: '#FFFFFF',
          elevation: 7
        }}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>Reset your PIN</Text>
          <View style={ResetPinStyles.inputBox}>
            <TextInput
              style={ResetPinStyles.inputs}
              keyboardType='number-pad'
              underlineColorAndroid='transparent'
              maxLength={4}
              onChangeText={(text) => {
                this.setState({ enterPin: text });
              }}
              value={this.state.enterPin}
              returnKeyType='next'
            />
          </View>
          <View style={ResetPinStyles.inputBox}>
            <TextInput
              style={ResetPinStyles.inputs}
              keyboardType='number-pad'
              underlineColorAndroid='transparent'
              maxLength={4}
              onChangeText={(text) => {
                this.setState({ confirmPin: text });
              }}
              value={this.state.confirmPin}
              returnKeyType='next'
            />
          </View>
          <Button
            onPress={this.resetPin}
            title="Reset your PIN"
            color="#841584"
          />
        </View>
      </View>
    )
  }

}

const ResetPinStyles = StyleSheet.create({
  'MainContainer': {
    flex: 1
  },
  inputBox: {
    borderColor: '#000000',
    borderWidth: 1,
    width: '80%',
    marginVertical: 5,
    height: 40,
    alignItems: 'center',
    borderRadius: 5
  },
  inputs: {
    backgroundColor: 'transparent',
    fontSize: 16,
    height: 40,
    flex: 1,
    color: '#000000'
  }
});

export default ResetPin;