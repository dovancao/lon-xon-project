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
  render (){
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
      </ScrollView>
    )
  }

}
