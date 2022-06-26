require('babel-register');
require('babel-polyfill');
// require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['0x807dc5970391014249257fdd0de5c8b8952d6cb7e735e664d43e5170f28e49e5'];
// const INFURA_KEY = process.env["INFURA_API_KEY"]
// const URL = 'https://rinkeby.infura.io/v3/' + INFURA_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777 // Match any network id
    },
    // kovan: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKeys.split(','), // Array of account private keys
    //       `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
    //     )
    //   },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 42
    // },
    // main: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKeys.split(','), // Array of account private keys
    //       `https://main.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
    //     )
    //   },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 1
    // },
    // rinkeby: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKey, URL) // Url to an Ethereum Node
    //   },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 4
    // },
    // ropsten: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKeys.split(','), // Array of account private keys
    //       `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
    //     )
    //   },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 3
    // }
    bscTestnet: {
    provider: () =>  new HDWalletProvider( 
      privateKeys, 
      'https://data-seed-prebsc-1-s1.binance.org:8545/'),
      network_id: 97,
      skipDryRun: true
    }
},
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: ">=0.6.0 <0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}