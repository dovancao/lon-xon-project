import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground
 } from 'react-native';

import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import WalletScreen from './WalletScreen'
import CreateWallet from './CreateWallet'
import ImportWallet from './ImportWallet'
import WelcomeScreen from './WelcomeScreen'
import PointBankPage from './PointBankPage';
import MutualPointBank from './MutualPointBank';
import DetailBankPage from './DetailBankPage';

const AppNavigator = createStackNavigator({
  CreateWallet: {
      screen: CreateWallet
  },
  ImportWl: {
    screen: ImportWallet
  },
  PointBank: {
    screen: PointBankPage
  },
  DetailBank: {
    screen: DetailBankPage
  },
  MutualPoint: {
    screen: MutualPointBank
  },
  Home: {
    screen: WelcomeScreen
  },
  WalletManagement: {
      screen: WalletScreen
    }
  }, {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
  )


class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

export default App