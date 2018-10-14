import React, {Component} from 'react';

import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView
 } from 'react-native';
 import Utils from './Utils';

 export default class MutualPointBank extends Component {

  _onBack = () => {
    this.props.navigation.navigate('WalletManagement')
  }
  _onChangeBankName = () => {

  }

  _onEndEditingBankName = () => {

  }

  _onPressButton = () => {

  }

  render () {
    return (
    <ScrollView contentContainerStyle={{
      alignItems: 'center',
      }}>
      <ImageBackground source={require('./Images/nen-01.png')} style={{width: '100%', height: 45, padding: 0, marginTop: 24}}>
        <View style={{paddingTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
          <TouchableOpacity onPress={this._onBack}>
            <Image source={require('./Images/cmn_btn_back.png')} style={{
              paddingLeft: Utils.vw(7.78),
              height: Utils.vw(7.5),
              width: Utils.vw(7.5),
              marginLeft: 8,
              resizeMode: 'contain',
            }} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 50, marginRight: 50}}>Mutual Point Bank</Text>
        </View>
      </ImageBackground>
      <View style={{marginTop: 100}}>
        <Text style={{
          paddingTop: Utils.vw(10.56),
          fontSize: 20,
          fontWeight: 'bold'
        }}>
          Bank Name
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 2,   
          }}
          placeholder='Please enter your Bank Name'
          placeholderTextColor={'#648cc1'}
          secureTextEntry
          onChangeText={this._onChangeBankName}
          onEndEditing={this._onEndEditingBankName}
          underlineColorAndroid='transparent'
          >
        </TextInput>
        <View style={{
          backgroundColor: '#53b95c',
          padding: 10,
          borderRadius: 15,
          marginTop: 50
          }}>
          <TouchableOpacity
            onPress={this._onPressButton}
          >
            <View style={{
              width: 180,
              height: 45,
              backgroundColor: '#53b95c'
              }}>
              <Text style={{
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center'
                }}>
                ADD MUTUAL POINT BANK
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    )
  }
 }