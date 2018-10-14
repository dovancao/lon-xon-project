import React, {Component} from 'react';

import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback
 } from 'react-native';
 import Utils from './Utils';

 export default class PointBankPage extends Component {

  _onBack = () => {
    this.props.navigation.navigate('WalletManagement')
  }

  _onChangePage = () => {
    this.props.navigation.navigate('DetailBank')
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
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 50, marginRight: 50}}>Manage Your Point & Bank</Text>
            </View>
          </ImageBackground>
          <View style={{borderColor: '#68bc47', marginHorizontal: 30, borderRadius: 15, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 16, marginTop: 50, width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold', color: '#68bc47', fontSize: 20}}>Available Point</Text>
            <Text style={{fontSize: 18}}>1000</Text>
          </View>
          <View style={{ flexDirection: 'column'}}>
            <View style={{ marginTop: 50}}>
              <View style={{ flexDirection: 'row',}}>
                <View style={{backgroundColor: '#68bc47', padding: 15, borderRadius: 15, margin: 15}}>
                  <TouchableOpacity onPress={this._onChangePage}>
                    <View style={{width: 100, height: 60, backgroundColor: '#68bc47'}}>
                      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Family</Text>
                      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>1000</Text>
                    </View> 
                  </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#68bc47', padding: 15, borderRadius: 15, margin: 15}}>
                  <TouchableOpacity>
                    <View style={{width: 100, height: 60, backgroundColor: '#68bc47'}}>
                      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Friends</Text>
                      <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>500</Text>
                    </View> 
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 20}}>
              <View style={{ flexDirection: 'row',}}>
                <View style={{backgroundColor: '#68bc47', padding: 15, borderRadius: 15, margin: 15}}>
                    <TouchableOpacity>
                      <View style={{width: 100, height: 80, backgroundColor: '#68bc47'}}>
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>High School</Text>
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>1000</Text>
                      </View> 
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          </View>
      </ScrollView>
     )
   }
 }