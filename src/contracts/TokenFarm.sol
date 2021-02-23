pragma solidity ^0.5.0;
// this contract is responsible for the yielding
import "./DappToken";
import "./DaiToken";

contract TokenFarm {
  string public name = "Dapp Token Farm";
  DappToken public dappToken;
  DaiToken public daiToken;
  // state varible that gets stored on the block chain

  constructor(DappToken _dappToken, DaiToken _daiToken) {
    dappToken = _dappToken;
    daiToken = _daiToken;
    // grab token addresses and assign to state vars to access them in other funtions
  }
}