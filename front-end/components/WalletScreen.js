import React, {Component} from 'react';
import Utils from './Utils';
import { Text, 
  ScrollView, 
  View, 
  TouchableOpacity, 
  Image, ImageBackground } from 'react-native'

class WalletScreen extends Component {

  _onBack = () => {
    this.props.navigation.navigation('')
  }

  _onPressNext = () => {

  }

  _onMutualBankPage = () => {
    this.props.navigation.navigate('MutualPoint')
  }

  _onPointBankPage = () => {
    this.props.navigation.navigate('PointBank')
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
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 50, marginRight: 50}}>Account Information</Text>
          </View>
        </ImageBackground>
        <View style = {{
          paddingTop: Utils.vw(5.19),
          paddingBottom: Utils.vw(5.19),
          width: Utils.vw(94.44),
          flexDirection: 'row',
          alignItems: 'center',
          display: 'flex',
          borderBottomWidth: 1,
          underlineColorAndroid: 'transparent'
        }}>
          <View style={{flex: 90, flexDirection: 'row',  alignItems: 'center'}}>
            <Text style={{
              // color: '#fff',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 20,
              width: '100%',
              position: 'absolute',
            }}>Mutual Point Bank
            </Text>
          </View>
          <View style={{flex: 10}}>
            <TouchableOpacity onPress={this._onMutualBankPage}>
                <Image source={require('./Images/no503_btn_select.png')} style={{
                  paddingLeft: Utils.vw(2.78),
                  height: Utils.vw(4.81),
                  width: Utils.vw(6.11),
                  resizeMode: 'contain'
                }} />
              </TouchableOpacity>
          </View>
        </View>
        <View style = {{
          paddingTop: Utils.vw(5.19),
          paddingBottom: Utils.vw(5.19),
          width: Utils.vw(94.44),
          flexDirection: 'row',
          alignItems: 'center',
          display: 'flex',
          borderBottomWidth: 1,
          underlineColorAndroid: 'transparent'
        }}>
          <View style={{flex: 90, flexDirection: 'row',  alignItems: 'center' }}>
            <Text style={{
              // color: '#fff',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 20,
              width: '100%',
              position: 'absolute'
            }}>Manage your point bank
            </Text>
          </View>
          <View style={{flex: 10}}>
            <TouchableOpacity onPress={this._onPointBankPage}>
              <Image source={require('./Images/no503_btn_select.png')} style={{
                paddingLeft: Utils.vw(2.78),
                height: Utils.vw(4.81),
                width: Utils.vw(6.11),
                resizeMode: 'contain'
              }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default WalletScreen