// const { expect, assert } = require("chai");
// const { ethers, getNamedAccounts, network } = require("hardhat")
// const axios = require('axios');
// const { BigNumber, utils } = require("ethers");
// // const {networks}= require("../scripts/networks");
// const helpers = require("@nomicfoundation/hardhat-network-helpers");
// require('dotenv').config()


// describe("AlphaVaultSwap", function() {


//   it("should fill the quote and return the bought amount", async function() {
    // let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");

// const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // forked address 
// await helpers.impersonateAccount(address);           
// [deployer] = await ethers.getSigners(address);

// const response = await  axios.get(
//   `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
// );

// let WETH=await ethers.getContractAt("IWETH",
// response.data.sellTokenAddress,                
// deployer
// );
// // console.log(WETH);

//  let DAI=await ethers.getContractAt("IERC20",
//                 response.data.buyTokenAddress,
//                     deployer
//                     );

// const params = {
// sellToken: response.data.sellTokenAddress,
// buyToken: response.data.buyTokenAddress ,
// amount:response.data.sellAmount ,
// takerAddress: deployer.address
// }

// const beforeBalance = await WETH.balanceOf(deployer.address) ;
//  console.log(beforeBalance.toString());
  
//  const depositing = await WETH.deposit({ value: params.amount });
// await  depositing.wait(1);
// const afterBalance = await WETH.balanceOf(deployer.address) ;
// console.log(afterBalance.toString());

// var quote = response.data ;
// // console.log(quote);
// var proxy = response.data.allowanceTarget ;
// // console.log(proxy);
// var amountstr = (response.data.sellAmount).toString();  // to string error 
// // console.log(amountstr);

// const approval = await WETH.approve(proxy, amountstr);
// await approval.wait(1);
// console.log("-----------------------Approval given------------------------------");
// // const txParams = {
// // ...quote,
// // from : deployer.address ,  
// //  to: quote.to ,
// // value:(quote.value).toString(16),
// // gasPrice : quote.gasPrice,                    // get from the quote 
// // gas : quote.gas
// // } 

// const txParams = {
//   to: quote.to,
//   value: (quote.value).toString(16),
//   data: quote.data ,
//   gasPrice: quote.gasPrice,
//   gasLimit: quote.gas,
//   chainId: 31337  // Replace with the appropriate chain ID of local network quote will reteurn the arbitrum one
// };

// const transaction = await deployer.sendTransaction(txParams);

// await transaction.wait(1);
// console.log("------------------------sent---------------------------------");

// const lastBalance = await WETH.balanceOf(deployer.address) ;
// console.log("WETH balance after swap --------",lastBalance.toString());
// const lastBalanceOfDAI = await DAI.balanceOf(deployer.address) ;

// console.log("DAI after swap--------",lastBalanceOfDAI.toString() );
// console.log("#######################################################################");
//  });
// });

