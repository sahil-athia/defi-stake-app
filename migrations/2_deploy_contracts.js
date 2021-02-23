const Tokenfarm = artifacts.require("Tokenfarm");

module.exports = function(deployer) {
  deployer.deploy(Tokenfarm);
};
