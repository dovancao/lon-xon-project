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
import { RkButton } from 'react-native-ui-kitten';
import Utils from './Utils';
import {getNewWalletServer, getAddressBalance} from '../networking/server';
import QRCode from 'react-native-qrcode';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

export default class CreateWallet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      confirmPassword: '',
      dataWallet: '',
      address: '',
      balanceOfAddress: '',
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

  // press create wallet button
  async _onPressButton () {
    await getNewWalletServer(this.state.password)
    .then((walletInfo) => {
      this.setState({address: walletInfo.address, privateKey: walletInfo.privateKey})
    }).catch((error) => {
      Alert.alert(
        'Please try again',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    });

    await getAddressBalance(this.state.address)
      .then((response) => {
        this.setState({balanceOfAddress: response.balance})
      }).catch(error => console.log(error));

    if(this.state.password !== '' && this.state.confirmPassword !== ''){
      this.setState({
        view: 2
      })
    } else {
      return
    }
    
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

  _onMenu = () => {
    this.props.navigation.navigate('WalletManagement')
  }

  _onPressBack = () => {
    this.props.navigation.navigate('Home')
  }

  _onPromotion = () => {
    this.props.navigation.navigate('Promotion')
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
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#9f9e9e', marginLeft: 100, marginRight: 100}}>Create Wallet</Text>
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
        marginTop: 200
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
            CREATE NEW WALLET
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>)
    } else {
     return (
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        marginTop: 24
        }}>
        <ImageBackground source={require('./Images/nen-01.png')} style={{width: '100%', height: '100%', padding: 0, margin: 0}}>
        <View style={{paddingTop: 10, flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between'}}>
          <View>
            <TouchableOpacity onPress={this._onMenu}>
              <Image source={require('./Images/no500_btn_menu.png')} style={{
                paddingLeft: Utils.vw(7.78),
                height: Utils.vw(7.5),
                width: Utils.vw(7.5),
                marginLeft: 8,
                resizeMode: 'contain',
              }} />
            </TouchableOpacity>
          </View>
          <View>
            <Image source={require('./Images/logos2.png')} style={{
                paddingLeft: Utils.vw(7.78),
                height: Utils.vw(14.5),
                width: Utils.vw(14.5),
                marginLeft: 8,
                resizeMode: 'contain',
              }} />
          </View>
          <View>
            <TouchableOpacity onPress={this._onPromotion}>
              <Image source={require('./Images/ribbon.png')} style={{
                paddingLeft: Utils.vw(7.78),
                paddingRight: Utils.vw(7.78),
                height: Utils.vw(7),
                width: Utils.vw(7),
                marginLeft: 8,
                resizeMode: 'contain',
              }} />
            </TouchableOpacity>
          </View>
        </View>
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
                width: 60,
                height: 12,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 10,
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
                width: 60,
                height: 12,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 10,
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
                width: 60,
                height: 12,
                backgroundColor: '#808080'
              }}>
                <Text style={{
                  fontSize: 10,
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
          <ImageBackground source={require('./Images/quarter.png')} style={{width: 120, height: 120}}>
            <View style={{padding: 30}}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {this.state.balanceOfAddress}
                </Text>
                <Text style={{
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Loya
                </Text>
            </View>
          </ImageBackground>
          <View style={{ paddingLeft: 30, marginLeft: 5}}>
            <View style={{paddingHorizontal: 20, width: '80%'}}>
              <Text style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'left',
                  paddingBottom: 10,
                  flexWrap: 'wrap'
                }}>
                {this.state.address}
              </Text>
            </View>
            <View style={{backgroundColor: 'white', width: 85, height: 85, marginLeft: 35}}>
              <QRCode
                value={this.state.address}
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
          <View>
            <Text style={{color: '#9f9e9e'}}>Transaction History</Text>
          </View> 
          <View>

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
    padding: 15,
    justifyContent: 'space-between'
  },
  viewcolum: {
    flex: 1,
    flexDirection: "column"
  }
})