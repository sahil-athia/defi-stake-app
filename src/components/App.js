import React, { Component } from 'react'
import Navbar from './Navbar'
import './App.css'
import Web3 from 'web3'

class App extends Component {

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

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0'
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
