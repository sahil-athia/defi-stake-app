const TokenFarm = artifacts.require("TokenFarm");
// use truffle exec to run this file
module.exports = async function(callback) {
  // allows for the issuing of token from the command line
  const tokenFarm = await TokenFarm.deployed()
  await tokenFarm.issueTokens()

  console.log("Tokens Issued")
  callback()
};