import React, { Component } from 'react'
import Navbar from './Navbar'
import './App.css'
import Web3 from 'web3'
import DaiToken from "../abis/DaiToken.json"

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      daiToken: {},
      dappToken: {},
      tokenFarm: {},
      daiTokenBalance: {},
      dappTokenBalance: {},
      stakingBalance: {},
      loading: true
    }
  }

  async componentWillMount() {
    await this.load_web3()
    await this.loadBlockChainData()
  }

  async loadBlockChainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    // load the dai token

    // this will give us the adddress
    const daiTokenData = DaiToken.networks[networkId]

    // this will create a JS version of the contract
    if(daiTokenData) {
      const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenData.address)
      this.setState({ daiToken })

      // we need to use methods to use the function inside of the smart contract
      const daiTokenBalance = await daiToken.methods.balanceOf(this.state.account).call()
      this.setState({ daiTokenBalance: daiTokenBalance.toString() })
      console.log(daiTokenBalance.toString())
    } else {
      window.alert("DaiToken contract not deployed to the detected network")
    }
  }

  async load_web3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert("Non-ethereum browser detected. Try using MetaMask")
    }
  }


  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">

                <h1>Hello, World</h1>

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
