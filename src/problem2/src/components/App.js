import React, { Component } from 'react'
import Web3 from 'web3'
import Navbar from './Navbar'
import './App.css'
import TransactionForm from "./TransactionForm";

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {

    if (window.web3) {

      const web3 = window.web3

      const accounts = await web3.eth.getAccounts()

      if (accounts[0]) {
        this.setState({ account: accounts[0] })
      } else {
        this.setState({ account: 'Non-Ethereum browser detected. You should consider trying MetaMask!' })
      }

      // const ethBalance = await web3.eth.getBalance(this.state.account)
      // this.setState({ ethBalance })

    } else {
      this.setState({ account: 'Non-Ethereum browser detected. You should consider trying MetaMask!' })
    }


    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)

      try {
        await window.ethereum.enable()
      } catch (err) {

      }

    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      // window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      loading: true
    }
  }

  render() {
    let content
    if(this.state.loading) {
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      content = <TransactionForm />
    }

    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">

                {content}

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
