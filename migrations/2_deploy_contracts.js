const TokenFarm = artifacts.require("TokenFarm");
const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

module.exports = async function(deployer, network, accounts) {
  // deploy the mock dai token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  // deploy the dapp token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployer()

  // deploy the token farm
  await deployer.deploy(Tokenfarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  // we are going to add all of th dapp tokens to the token farm
  // to give them as intrest on DAI investment

  // trander all 1 million dapp coins
  // token has 18 decimal places, thats why it looks like theres more than 1 million
  // solidity does not handle decimals so it has to be stored as an integer
  await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')
};
