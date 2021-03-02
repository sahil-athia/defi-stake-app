import React, { Component } from 'react'
import dai from "../dai.png"

class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col">Staking Balance</th>
              <th scope="col">Reward Balance</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{window.web3.utils.fromWei(this.props.stakingBalance)} mDAI</td>
              <td>{window.web3.utils.fromWei(this.props.dappTokenBalance)} DApp</td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4" >
          <div className="card-body">
            <form>
              <div>
                <label className="float-left"><b>Stake Tokens</b></label>
                <span className="float-right text-muted">
                  Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Main