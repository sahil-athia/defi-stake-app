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
  // tells the app the user has staked or is staking
  mapping(address => bool) public hasStaked;
  mapping(address => bool) public isStaking;


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

    // add users to stakers array only if they havent staked before
    if(!hasStaked[msg.sender]) {
      stakers.push(msg.sender);
    }
    // update the stake
    isStaking [msg.sender] = true;
    hasStaked[msg.sender] = true;


  }
  // issuing tokens as intrest
    function issueToken() public {
      for (uint i = 0; i < stakers.length; i++) {

        // we are grabbing the balance and adress of each staker
        address recipient = stakers[i];
        uint balance = stakingBalance[recipient];

        if (balance > 0) {
        // for the number of DAI stake we give an equivalent DApp token
        dappToken.transfer(recipient, balance);
        }
      }
    }
  // unstaking tokens (withdraw)

}