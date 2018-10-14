import React, { Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

const newWalletUrl = 'https://lonxon-team.herokuapp.com/api/wallet/new-wallet';
const openWalletUrl = "http://localhost:2000/api/wallet/open-wallet";
const getBalanceUrl = 'https://lonxon-team.herokuapp.com/api/wallet/balance';

  function getNewWalletServer(password) {
    return fetch(newWalletUrl, {
      method: 'POST',
      body: JSON.stringify({
        password: password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function openWallet(pwk) {
    return fetch(openWalletUrl, {
      method: 'POST',
      body: JSON.stringify({
        privateKey: pwk
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  function getAddressBalance(address) {
    return fetch(`https://lonxon-team.herokuapp.com/api/wallet/balance/${address}`)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getTransactionAddress(address) {
    return fetch(`https://lonxon-team.herokuapp.com/api/wallet/transaction/${address}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

export {getNewWalletServer, getAddressBalance, openWallet, getTransactionAddress};