pragma solidity ^0.5.0;
// this contract is responsible for the yielding
import "./DappToken.sol";
import "./DaiToken.sol";

contract TokenFarm {
  string public name = "Dapp Token Farm";
  DappToken public dappToken;
  DaiToken public daiToken;
  address public owner;

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
    owner = msg.sender;
    // grab token addresses and assign to state vars to access them in other funtions
  }

  // staking tokens (deposit)
  function stakeTokens(uint _amount) public {

    require(_amount > 0, "amount cannot be zero");
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
  function issueTokens() public {
    // only the owner of the contract can call the function
    require(msg.sender == owner, "caller must be owner");

    for (uint i = 0; i < stakers.length; i++) {

      // we are grabbing the balance and adress of each staker
      address recipient = stakers[i];
      uint balance = stakingBalance[recipient];

      if (balance > 0) {
        // for the number of DAI staked by an investor the owner can give an equivalent number of DApp token
        dappToken.transfer(recipient, balance);
      }
    }
  }
  // unstaking tokens (withdraw)
  function unstakeTokens() public {
    // fetch the staking balance
    uint balance = stakingBalance[msg.sender];

    require(balance > 0, "staking balance must be greater than 0");

    // transer the token to the function caller
    daiToken.transfer(msg.sender, balance);

    // reset their staking balance and staking status
    stakingBalance[msg.sender] = 0;
    isStaking[msg.sender] = false;
  }

}