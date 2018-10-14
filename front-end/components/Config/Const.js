export default {
  SAVED_WALLET_INFO: 'savedwalletinfo',

  GAS_DEFAULT: 40,
  GAS_LIMIT_DEFAULT: 21000,
  TOKEN_GAS_LIMIT_DEFAULT: 150000,
  DEFAULT_NODE_KEY: 'eth_mew',
  DEFAULT_LANG: 'en',
  DEFAULT_ADVANCE: true,

  PASSWORD_LENGTH: __DEV__ ? 0 : 8,
  BORROW_EXCHANGE_RATE: 1000,
  BORROW_TIMES: [{
    id: 1,
    text: '1_month'
  },
  {
    id: 2,
    text: '2_month'
  },
  {
    id: 3,
    text: '3_month'
  },
  {
    id: 4,
    text: '6_month'
  },
  {
    id: 5,
    text: '12_month'
  }
  ],

  WALLET_TYPE: {
    DEFAULT: 'default',
    ADDRESS_ONLY: 'addressOnly'
  },

  NUM_HD_WALLETS_PER_PAGE: 5,

  HD_DERIVATION_PATH: [{
    key: 0,
    value: "m/44'/60'/0'/0",
    desc: 'Jaxx, Metamask, Exodus, imToken'
  }, {
    key: 1,
    value: "m/44'/60'/0'",
    desc: 'Ledger (ETH)'
  }, {
    key: 2,
    value: "m/44'/60'/160720'/0'",
    desc: 'Ledger (ETC)'
  }, {
    key: 3,
    value: "m/44'/61'/0'/0",
    desc: 'TREZOR (ETC)'
  }, {
    key: 4,
    value: "m/0'/0'/0'",
    desc: 'SingularDTV'
  }, {
    key: 5,
    value: "m/44'/1'/0'/0",
    desc: 'Network: Testnets'
  }, {
    key: 6,
    value: "m/44'/40'/0'/0",
    desc: 'Network: Expanse'
  }, {
    key: 7,
    value: "m/44'/108'/0'/0",
    desc: 'Network: Ubiq'
  }, {
    key: 8,
    value: "m/44'/163'/0'/0",
    desc: 'Network: Ellaism'
  }, {
    key: 9,
    value: "m/44'/1987'/0'/0",
    desc: 'Network: EtherGem'
  }, {
    key: 10,
    value: "m/44'/60'/1'/0",
    desc: 'Your Custom Path'
  }],

  NOTIFIER_CLOSE_INTERVAL: 2500,
  NOTIFIER_ANIMATE_DURATION: 450

}
