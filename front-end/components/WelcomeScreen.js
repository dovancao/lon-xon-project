import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
 } from 'react-native';

 class WelcomeScreen extends Component {
  _onPressCreateButton = () => {
    this.props.navigation.navigate('CreateWallet')
    }

    _onPressImportButton = () => {
      this.props.navigation.navigate('ImportWl')
      }
  render () {

   
    return (
        <ScrollView contentContainerStyle={{
          alignItems: 'center',
          }}>
          <Image source={require('./Images/logos-01.png')} style={{width: 90, height: 120, marginTop: 150}}/>
          <View style={{marginTop: 80}}>
            <View style={{
                backgroundColor: '#53b95c',
                padding: 10,
                borderRadius: 22
              }}>
              <TouchableOpacity
                onPress={this._onPressCreateButton}
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
            <View style={{
                backgroundColor: '#68bc47',
                padding: 10,
                borderRadius: 22,
                marginTop: 20
              }}>
              <TouchableOpacity
                onPress={this._onPressImportButton}
              >
                <View style={{
                  width: 180,
                  height: 25,
                  backgroundColor: '#68bc47'
                }}>
                  <Text style={{
                    fontSize: 15,
                    color: 'white',
                    textAlign: 'center'
                  }}>
                    IMPORT YOUR WALLET
                  </Text>
                </View>
                </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    )
  }
}

export default (WelcomeScreen)