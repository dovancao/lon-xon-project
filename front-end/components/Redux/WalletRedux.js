import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getSavedWalletInfoSuccess: ['payload'],

  generateWallet: ['password'],
  generateWalletSuccess: ['payload'],

  decryptWallet: ['data'],
  decryptWalletSuccess: ['payload'],

  setHDAddresses: ['dPath'],
  setHDAddressesSuccess: ['hdWallets'],

  setHDWallet: ['id', 'password'],

  getBalance: null,
  getBalanceOfTokens: ['tokens'],
  getBalanceSuccess: ['data'],

  sendToken: ['data'],
  sendTokenSuccess: ['transaction']
})

export const WalletTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  payload: null,
  data: null,
  hdWallets: null
})

/* ------------- Selectors ------------- */

export const WalletSelectors = {
  getPayload: state => state.wallet.payload,
  getAddress: state => state.wallet.payload ? state.wallet.payload.address : null,
  getKeystore: state => state.wallet.payload ? state.wallet.payload.keystore : null,
  getPrivateKey: state => state.wallet.payload ? state.wallet.payload.privateKey : null,
  getHDWallets: state => state.wallet.hdWallets ? state.wallet.hdWallets : [],
  getBalances: state => state.wallet.payload ? state.wallet.payload.balances || {} : {},
  getTransaction: state => state.wallet.payload ? state.wallet.payload.transaction : null,
  hasSavedWallet: state => state.wallet.payload && state.wallet.payload.address
}

/* ------------- Reducers ------------- */

const getSavedWalletInfoSuccess = (state, action) => {
  const { payload } = action

  return state.set('payload', payload)
}

const generateWallet = (state) => {
  return state.set('payload', null)
}

const generateWalletSuccess = (state, action) => {
  const { payload } = action

  return state.set('payload', payload)
}

const decryptWallet = (state, action) => {
  return state.set('payload', null)
}

const decryptWalletSuccess = (state, action) => {
  const { payload } = action

  return state.set('payload', payload)
}

const setHDAddresses = (state, action) => {
  return state
}

const setHDAddressesSuccess = (state, action) => {
  const { hdWallets } = action

  return state.set('hdWallets', hdWallets)
}

const setHDWallet = (state, action) => {
  return state
}

const getBalance = (state, action) => {
  return state
}

const getBalanceOfTokens = (state, action) => {
  return state
}

const getBalanceSuccess = (state, action) => {
  const { data } = action

  data.forEach(element => {
    state = state.setIn(['payload', 'balances', element.symbol], {balance: element.balance, usd: element.usd})
  })

  return state
}

const sendToken = (state, action) => {
  const { data } = action

  return state.set('data', data)
}

const sendTokenSuccess = (state, action) => {
  const { transaction } = action

  return state.setIn(['payload', 'transaction'], transaction)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SAVED_WALLET_INFO_SUCCESS]: getSavedWalletInfoSuccess,

  [Types.GENERATE_WALLET]: generateWallet,
  [Types.GENERATE_WALLET_SUCCESS]: generateWalletSuccess,

  [Types.DECRYPT_WALLET]: decryptWallet,
  [Types.DECRYPT_WALLET_SUCCESS]: decryptWalletSuccess,

  [Types.SET_H_D_ADDRESSES]: setHDAddresses,
  [Types.SET_H_D_ADDRESSES_SUCCESS]: setHDAddressesSuccess,

  [Types.SET_H_D_WALLET]: setHDWallet,

  [Types.GET_BALANCE]: getBalance,
  [Types.GET_BALANCE_OF_TOKENS]: getBalanceOfTokens,
  [Types.GET_BALANCE_SUCCESS]: getBalanceSuccess,

  [Types.SEND_TOKEN]: sendToken,
  [Types.SEND_TOKEN_SUCCESS]: sendTokenSuccess
})
