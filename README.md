# dApp Development Practice



## Problem 1: Three Ways to Sum to n

### Task

Provide 3 unique implementations of the following function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.



### Solution

In the file `/problem1/sumToN.js` there are 3 unique functions that you can use to sum to `n`. They are: 

1. `sum_to_n_a`
2. `sum_to_n_b`
3. `sum_to_n_c`



## Problem 2: Fancy Form

### Task 

Create a transaction form based on the template provided in this folder.

*You may use any third party plugin, library, and/or framework for this problem.*

1. You may add input validation/error messages to make the form interactive.
2. Your submission will be rated on its usage intuitiveness and visual attractiveness.
3. Show us your frontend development and design skills.

Please submit your solution using the files provided in the skeletal repo, including any additional files your solution may use.

### Solution

The Web App (Frontend Only) that was implemented (using React) has the following features:

1. It connects to your MetaMask wallet (using the Web3.js JavaScript library) and displays your wallet address
2. The transaction form has input validitation and displays error messages 
3. The design of the form is simple and intuitive

### Opening the Web App

> Make sure you have NodeJS installed on your computer before following the instructions below

To open the Web App (Frontend Only), do the following: 

1. Open a terminal window
2. Change the directory of your terminal to the directory of  `problem2`
3. Type `npm install` in your terminal to download all the Node Modules required for the Web App
4. Type `npm start` in your terminal to open the Web App



## Problem 3: Datasource Connector Tool

### Task

 ⚠️ Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com/).

Implement a datasource connector to abstract away data retrieval and manipulation from the *View Controllers*. You are required to implement a Datasource utility class. How your implementation will be used:

```jsx
ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });
```

#### Notes

1. `Datasource.getPrices()` returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
2. `price.mid()` returns the mid-point value between `price.buy` and `price.sell`.
3. `price.quote()` returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.

#### Expected Output

```
Mid price for BTCSGD is 8925.7 SGD.
Mid price for LTCUSD is 65.92 USD.
Mid price for ETHSGD is 509.275 SGD.
Mid price for BCHSGD is 852.29 SGD.
Mid price for LTCSGD is 89.94 SGD.
Mid price for BTCUSD is 6529.6 USD.
Mid price for BCHUSD is 625.58 USD.
Mid price for ETHUSD is 373.555 USD.
```

### Solution

The Datasource utility class can be imported from the file `/problem3/datasource.js` 

## Problem 4: Interacting with Chain

### Task

⚠️ **TypeScript Only** - you are to complete this problem using TypeScript.

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: https://bscscan.com/

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`

#### Expected Output:

The output should be organized as one `address amount` per line.

```
0x123d475e13aa54a43a7421d94caa4459da021c77 99,888,874.62734227
0x0020c5222a24e4a96b720c06b803fb8d34adc0af 7,970,573.69197209
0xfe808b079187cc460f47374580f5fb47c82b87a5 2,894,918.96152958
…
```

### Solution

> Make sure you have NodeJS installed on your computer before following the instructions below

The script implemented is  `/problem4/retrieve-holders.ts`. To run the script, do the following:

1. Open a terminal window
2. Change the directory of your terminal to the directory of  `problem4`
3. Type `npm install` in your terminal to download all the Node Modules required to run the script
4. Type `ts-node ./retrieve-holders.ts` in your terminal to run the script

## Problem 5: Utility Contract

### Task

⚠️ **Solidity Only** - you are to complete this problem using Solidity.

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

### Solution

> Make sure you have Truffle installed on your computer before following the instructions below.

> Don't forget to add your Secret Recovery Phrase (i.e your mnemoic phrase) in the file `/project5/.secret` before you deploy the smart contract.

The Solidity smart contract file is `/problem5/contracts/UtilityContract.sol`. To deploy it onto the Ethereum Blockchain (Mainnet), do the following:

1. Open a terminal window
2. Change the directory of your terminal to the directory of  `problem5`
3. Type `truffle migrate --network mainnet` in your terminal to deploy `UtilityContract.sol` (and `Migration.sol`) onto the Ethereum Blockchain



