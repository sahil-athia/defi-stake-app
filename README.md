# Token Farm

Token Farm is a decentralized finance app that rewards investors based on an investment, utilizing ethereum smart contracts.

Users can invest mock DAI tokens and receive an equal number of DAPP tokens as intrest. 

This application is built with **Solidity**, **ReactJS**, **CSS**, **Chai**, **Ganache**, and **Truffle**

## Getting Started

- Fork this repository, then clone your fork of this repository.
- Install Truffle with `npm install -g truffle`
- Run `truffle compile` in the app directory
- Download [Ganache](https://www.trufflesuite.com/ganache) and launch the application 
- Run `truffle migrate` 
- OPTIONAL: run `truffle test` to run JS and Solidity test cases
- Download [MetaMask](https://metamask.io/) and import the seed phrase from the Ganache blockchain
- Add a new network with Custom RPC and enter `http://127.0.0.1:7545` and save
- Run `npm start` to open the app and connect MetsMask to the second ganache account, this is the default investor.
- The rewards can be distrubited via command line using `truffle exec scripts/issue-tokens.js`.

## App Preview

- Home Page
!["Home Page"](https://github.com/sahil-athia/defi-stake-app/blob/master/docs/home-page.png?raw=true)

## Requirements
- NodeJS v8.9.4 or later
- Windows, Linux or Mac OS X