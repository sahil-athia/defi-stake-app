const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

module.exports = async function(deployer, network, accounts) {
  // deploy the mock dai token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // deploy the dapp token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()

  // deploy the token farm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // we are going to add all of th dapp tokens to the token farm
  // to give them as intrest on DAI investment

  // trander all 1 million dapp coins
  // token has 18 decimal places, thats why it looks like theres more than 1 million
  // solidity does not handle decimals so it has to be stored as an integer
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

  // investors should also be able to invet the DAI tokens
  // give 100 dai token to the second account on ganache (first account is deployer, second is investor)
  await daiToken.transfer(accounts[1], "100000000000000000000")
};
