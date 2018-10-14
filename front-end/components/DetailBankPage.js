import React, {Component} from 'react';

import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  Modal,
  Linking,
  Alert
 } from 'react-native';
 import Utils from './Utils';
//  import QRCodeScanner from 'react-native-qrcode-scanner';
//  var Camera = require('react-native-camera') 
 export default class DetailBankPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
  }

  // onSuccess(e) {
  //   if(e) {
  //     this.setState({
  //       modalVisible: false
  //     })
  //   }
  //   Linking
  //     .openURL(e.data)
  //     .catch(err => console.error('An error occured', err));
  // }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _onBack = () => {
    this.props.navigation.navigate('PointBank')
  }

  _onOpenModal = () => {
    this.setModalVisible(true)
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
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 100, marginRight: 50}}>Family</Text>
        </View>
      </ImageBackground>
      <View style={{borderColor: '#68bc47', marginHorizontal: 30, borderRadius: 15, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 16, marginTop: 50, width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', color: '#68bc47', fontSize: 20}}>Available Point</Text>
          <Text style={{fontSize: 18}}>1000</Text>
      </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          {/* <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
          >
          </QRCodeScanner> */}
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width:50, height: 50, backgroundColor:'#fff'}}></View>

          </View>
        </Modal>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{paddingTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
          <TouchableOpacity onPress={this._onBack}>
            <Image source={require('./Images/png1.png')} style={{
              paddingLeft: Utils.vw(7.78),
              height: Utils.vw(12.5),
              width: Utils.vw(12.5),
              marginLeft: 8,
              resizeMode: 'contain',
              color: '#68bc47'
            }} />
          </TouchableOpacity>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#68bc47', marginLeft: 20, marginRight: 20}}>Add points</Text>
        </View>
        <View style={{paddingTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
          <TouchableOpacity onPress={this._onBack}>
            <Image source={require('./Images/png3.png')} style={{
              paddingLeft: Utils.vw(7.78),
              height: Utils.vw(12.5),
              width: Utils.vw(12.5),
              marginLeft: 8,
              resizeMode: 'contain',
              color: '#68bc47'
            }} />
          </TouchableOpacity>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#68bc47', marginLeft: 20, marginRight: 20}}>Point History</Text>
        </View>
        <View style={{paddingTop: 10, flexDirection: 'row',  alignItems: 'center'}}>
          <TouchableOpacity onPress={this._onOpenModal}>
            <Image source={require('./Images/png2.png')} style={{
              paddingLeft: Utils.vw(7.78),
              height: Utils.vw(12.5),
              width: Utils.vw(12.5),
              marginLeft: 8,
              resizeMode: 'contain',
              color: '#68bc47'
            }} />
          </TouchableOpacity>
          <Text style={{fontSize: 26, fontWeight: 'bold', color: '#68bc47', marginLeft: 20, marginRight: 20}}>Invite Bank Member</Text>
        </View>
        
      </View>
    </ScrollView>
   )
 }

}