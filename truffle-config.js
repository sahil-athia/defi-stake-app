require('babel-register');
require('babel-polyfill');

module.exports = {
  // this connects the trubble project to the blockchain (ganache 7545)
  networks: {
    development: {
      host: "127.0.0.1", // same as localhost
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
