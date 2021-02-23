const Tokenfarm = artifacts.require("Tokenfarm");
const DappToken = artifacts.require("DappToken");
const DaiToken = artifacts.require("DaiToken");

module.exports = async function(deployer, network, accounts) {
  // deploy the mock dai token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  deployer.deploy(Tokenfarm);
};
