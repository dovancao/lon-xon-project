import React, { Component } from 'react';
import { Button, 
  ScrollView, 
  Text, 
  TextInput, 
  View,
  Alert,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
 } from 'react-native'
 import Utils from './Utils';
 import QRCode from 'react-native-qrcode';

 import {openWallet, getAddressBalance} from '../networking/server';


 export default class ImportWallet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      confirmPassword: '',
      dataWallet: null,
      balaneOfAddress: '',
      address: '',
      privateKey: '',
      view: 1,
    }

    this._onChangePassword = this._onChangePassword.bind(this)
    this._onEndEditingPassword = this._onEndEditingPassword.bind(this)                                                                                        

    this._onChangeConfirmPassword = this._onChangeConfirmPassword.bind(this)
    this._onEndEditingConfirmPassword = this._onEndEditingConfirmPassword.bind(this)
    this._onPressButton = this._onPressButton.bind(this);
  }

  _onChangePassword (password) {
    this.setState(
      (previousState) => {
        return {
          password: password
        }
      }
    )
  }

  _onEndEditingPassword (event) {
    const password = event.nativeEvent.text
    this.setState({ password })
  }

  _onChangeConfirmPassword (confirmPassword) {
    this.setState({ confirmPassword: confirmPassword })
  }

  _onEndEditingConfirmPassword (event) {
    const confirmPassword = event.nativeEvent.text
    this.setState({ confirmPassword })
  }

  // press create wallet button
   _onPressButton () {
     openWallet(this.state.privateKey)
    .then((walletInfo) => {
      this.setState({address: walletInfo.address})
    }).catch((error) => {
      Alert.alert(
        'Please try again',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    })

    //get balance
     getAddressBalance(this.state.address)
      .then((response) => {
        console.log(response)
        this.setState({balanceOfAddress: response.balance})
      }).catch(error => console.log(error));

    this.setState({
      view: 2
    })
  }

  _onEndEditingPassword (event) {
    const password = event.nativeEvent.text

    this.setState({ password })
  }

  _onChangeConfirmPassword (confirmPassword) {
    this.setState({ confirmPassword: confirmPassword })
  }

  _onEndEditingConfirmPassword (event) {
    const confirmPassword = event.nativeEvent.text

    this.setState({ confirmPassword })
  }

  _onPressShow () {

  }

  _onPressBack = () => {
    this.props.navigation.navigate('Home')
  }

  render () {
    if(this.state.view === 1) {
      return (
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        }}>
        <View style={{paddingTop: 25, flexDirection: 'row',  alignItems: 'center'}}>
          <TouchableOpacity onPress={this._onPressBack}>
            <Image source={require('./Images/no503_btn_back.png')} style={{
              paddingLeft: Utils.vw(2.78),
              height: Utils.vw(4.81),
              width: Utils.vw(6.11),
              resizeMode: 'contain',
            }} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#9f9e9e', marginLeft: 100, marginRight: 100}}>Import Wallet</Text>
        </View>
        <View
          style={{
            paddingTop: Utils.vw(15),
            paddingBottom: Utils.vw(4.63),
            width: Utils.vw(94.44)
          }}
          >
          <Text style={{
                paddingTop: Utils.vw(10.56),
                // color: '#fff',
                fontSize: 16,
                fontWeight: 'bold'
            }}>
            Private Key
          </Text>
          <TextInput
            style={{
              // color: '#fff',
              // borderBottomColor: '#fff',
              borderBottomWidth: 2
            }}
            placeholder='Please enter your private key'
            placeholderTextColor={'#648cc1'}
            secureTextEntry
            onChangeText={(text) => this.setState({privateKey: text})}
            underlineColorAndroid='transparent'
          />
          <Text style={{
              paddingTop: Utils.vw(10.56),
              // color: '#fff',
              fontSize: 16,
              fontWeight: 'bold'
          }}>
            Password
          </Text>
          <TextInput
            style={{
              // color: '#fff',
              // borderBottomColor: '#fff',
              borderBottomWidth: 2
            }}
            underlineColorAndroid='transparent'
            placeholder='Please enter your password'
            placeholderTextColor={'#648cc1'}
            secureTextEntry
            onChangeText={this._onChangePassword}
            onEndEditing={this._onEndEditingPassword}
          />
          <Text style={{
              paddingTop: Utils.vw(10.56),
              fontSize: 16,
              fontWeight: 'bold'
          }}> Confirm password
          </Text>
          <TextInput style={{
              // color: '#fff',
              // borderBottomColor: '#fff',
              borderBottomWidth: 2
            }}
            underlineColorAndroid='transparent'
            placeholder="Confirm your password"
            placeholderTextColor={'#648cc1'}
            secureTextEntry
            onChangeText={this._onChangeConfirmPassword}
            onEndEditing={this._onEndEditingConfirmPassword}
          >
          </TextInput>
      </View>
      <View style={{
        backgroundColor: '#53b95c',
        padding: 10,
        borderRadius: 22,
        marginTop: 100
      }}>
      <TouchableOpacity
        onPress={this._onPressButton}
      >
        <View style={{
          width: 180,
          height: 25,
          backgroundColor: '#53b95c'
        }}>
          <Text style={{
            fontSize: 15,
            color: 'white',
            textAlign: 'center'
          }}>
            OPEN WALLET
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>)
    } else {
     return (
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        }}>
        <ImageBackground source={require('./Images/nen-01.png')} style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
        <View style={styles.view}>
          <View style={{
              backgroundColor: '#808080',
              padding: 10,
              borderRadius: 20,
              margin: 2
            }}>
            <TouchableOpacity
              onPress={this._onPressButton}
            >
              <View style={{
                width: 70,
                height: 15,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 12,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Receive
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
              backgroundColor: '#808080',
              padding: 10,
              borderRadius: 20,
              margin: 2
            }}>
            <TouchableOpacity
              onPress={this._onPressButton}
            >
              <View style={{
                width: 70,
                height: 15,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 12,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Exchange
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
              backgroundColor: '#808080',
              padding: 10,
              borderRadius: 20,
              margin: 2,
            }}>
            <TouchableOpacity
              onPress={this._onPressButton}
            >
              <View style={{
                width: 70,
                height: 15,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 12,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Send
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view}>
          <View style={{padding: 30}}>
              <Text style={{
                  fontSize: 35,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  paddingTop: 25
                }}>
                {this.state.balaneOfAddress}
              </Text>
              <Text style={{
                fontSize: 15,
                color: 'white',
                textAlign: 'center'
              }}>
                Loya
              </Text>
          </View>
          <View style={{padding: 30, marginLeft: 45}}>
              <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  paddingBottom: 10
                }}>
                address here
              </Text>
              <View style={{backgroundColor: 'white', width: 85, height: 85}}>
                <QRCode
                  value='address'
                  size={80}
                  bgColor="black"
                  fgColor ='white'
                >
                </QRCode>
              </View>
          </View>
        </View>
        </ImageBackground>
        <View>
          <View style={{borderBottomColor: '#808080'}}>
            <Text>Transaction History</Text>
          </View> 
        </View>
      </ScrollView>
     )
    }

    return (
      <View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row', 
    padding: 15
  },
  viewcolum: {
    flex: 1,
    flexDirection: "column"
  }
})