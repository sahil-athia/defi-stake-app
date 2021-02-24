pragma solidity ^0.5.0;
// this contract is responsible for the yielding
import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
  string public name = "Dapp Token Farm";
  DappToken public dappToken;
  DaiToken public daiToken;

  // all of the addresses that have ever staked
  address[] public stakers;
  // address(key) => amount tokens currently staking(value)
  mapping(address => uint) public stakingBalance;
  // tells the app the user has staked
  mapping(address => bool) public hasStaked;


  constructor(DappToken _dappToken, DaiToken _daiToken) public {
    dappToken = _dappToken;
    daiToken = _daiToken;
    // grab token addresses and assign to state vars to access them in other funtions
  }

  // staking tokens (deposit)
  function stakeTokens(uint _amount) public {
    // we want to trander DAI tokens from the investors wallet to this smartcontract
    // transferFrom is an ERC-20 standrad function in the daiToken
    daiToken.transferFrom(msg.sender, address(this), _amount);

    // updating staking balance
    stakingBalance[msg.sender] += _amount;
  }
  // unstaking tokens (withdraw)
  // issuing tokens 
}