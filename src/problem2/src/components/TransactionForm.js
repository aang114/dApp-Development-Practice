import React, { Component } from 'react'
import ethLogo from '../erc20-logo.png'

import Web3 from 'web3'

class TransactionForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {

          if (!window.web3) {
              event.preventDefault()
              window.alert(`Please connect your MetaMask Wallet with this Website to Make a Transaction :)`)
          } else if (parseFloat(this.tokenAmount.value) <= 0) {
              event.preventDefault()
              window.alert(`Amount to Send Must be Greater than 0`)

          } else if (window.web3.utils.isAddress(this.ethAddress.value) == false) {
              event.preventDefault()
              window.alert(`ETH Address Inputted is not Valid`)
          } else {
              window.alert(`Congratulations, you have sent ${this.tokenAmount.value.toString()} ERC-20 Tokens to ETH Address ${this.ethAddress.value.toString()}`)
          }

        }}>
        <div>
          <label className="float-left"><b>ETH Address</b></label>
        </div>
        <div className="input-group mb-4">
          <input
            type="text"
            ref={(input) => { this.ethAddress = input }}
            className="form-control form-control-lg"
            required />
        </div>
        <div>
          <label className="float-left"><b>Amount to send</b></label>
        </div>
        <div className="input-group mb-2">
          <input
            type="number"
            step="any"
            ref={(input) => { this.tokenAmount = input }}
            className="form-control form-control-lg"
            required
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <img src={ethLogo} height='32' alt=""/>
              &nbsp;&nbsp;&nbsp; ERC-20 Token
            </div>
          </div>


        </div>

        <div>
            <label className="float-left"><b>OTP Authentication</b></label>
        </div>
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control form-control-lg"
            required
          />


        </div>

        <button type="submit" className="btn btn-primary btn-block btn-lg">SEND TOKENS</button>
      </form>
    );
  }
}

export default TransactionForm;
