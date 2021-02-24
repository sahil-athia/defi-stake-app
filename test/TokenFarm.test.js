const { assert } = require("chai");
const { utils } = require("react-bootstrap");

const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

require("chai")
  .use(require("chai-as-promised"))
  .should()

const tokens = (num) => {
  return web3.utils.toWei(num, "ether")
  // give back 18 decimal point for tokens
}

contract("TokenFarm", ([owner, investor]) => {
  let daiToken, dappToken, tokenFarm
   
  before(async () => {
    // load contracts
    daiToken = await DaiToken.new()
    dappToken = await DappToken.new()
    tokenFarm = await TokenFarm.new(dappToken.address, daiToken.address)

    // transfer token to the token farm (dapp tokens)
    await dappToken.transfer(tokenFarm.address, tokens("1000000"))

    // tranfer investor tokens
    await daiToken.transfer(investor, tokens("100"), { from: owner })
    // we have to pass in data for who is calling the function (thats accounts 0)
  })

  describe("mock dai deployment", () => {
    it("has a name", async () => {
      const name = await daiToken.name()
      assert.equal(name, "Mock DAI Token")
    })
  })
  
  describe("Dapp token deployment", () => {
    it("has a name", async () => {
      const name = await dappToken.name()
      assert.equal(name, "DApp Token")
    })
  })

  describe("Token Farm deployment", () => {
    it("has a name", async () => {
      const name = await tokenFarm.name()
      assert.equal(name, "Dapp Token Farm")
    })

    it("has a token balance", async () => {
      const balance = await dappToken.balanceOf(tokenFarm.address)
      assert.equal(balance.toString(), tokens("1000000"))
    })
  })

  describe("Farming Tokens", async () => {
    it("rewards investors for staking in DAI tokens", async () => {
      let result;

      // check investor balance before staking
      result = await daiToken.balanceOf(investor)
      assert.equal(result.toString(), tokens("100"), "investor mock DAI token balance should be correct before deposit")
    })
  })
})