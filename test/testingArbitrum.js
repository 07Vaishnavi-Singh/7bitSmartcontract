// const { expect, assert } = require("chai");
// const { ethers, getNamedAccounts, network } = require("hardhat")
// const axios = require('axios');
// const { BigNumber, utils } = require("ethers");
// // const {networks}= require("../scripts/networks");
// const helpers = require("@nomicfoundation/hardhat-network-helpers");
// const Web3 = require('web3');
// const fetch = require('node-fetch');
// const yesno = require('yesno');


// describe("AlphaVault", function() {

//     // Define the deployer and user addresses
// let deployer;
    
//     beforeEach(async function() {

//     });

//     it("should fill the quote and return the bought amount", async function() {
//         let provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
         

//    if(true){

//     const chainId = 56;
//     const web3RpcUrl = 'https://bsc-dataseed.binance.org';
//     const walletAddress = '0x...xxx'; // Set your wallet address
//     const privateKey = '0x...xxx';




//         const address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
//         await helpers.impersonateAccount(address);
//         [deployer] = await ethers.getSigners(address);

// // const address_deploed = "0x2847efCF4Ac0D239A431697d0B7ABf6db90CA730"
// // console.log("at line 35");
//             // [deployer] = await ethers.getSigners();
//             const AlphaVaultSwap = await ethers.getContractFactory("AlphaVaultSwap")
//            const alphaVaultSwap =  await AlphaVaultSwap.deploy();
//             console.log("=====================================deployed=========================================");
//             console.log("Deployed at addresss :" ,alphaVaultSwap.address );
//             // const alphaVaultSwap=await ethers.getContractAt("AlphaVaultSwap",
//             // address_deploed,
//             //     deployer
//             //     );

//             // arbitrum 1
//             let response = await axios.get(
//                 `https://api.1inch.io/v5.0/42161/swap?fromTokenAddress=0x82aF49447D8a07e3bd95BD0d56f35241523fBab1&toTokenAddress=0xaf88d065e77c8cC2239327C5EDb3A432268e5831&amount=50000000000000&fromAddress=0x84Ebf92fA78e90832a52F1b8b7c1eb35487c091B&slippage=1`
//                   );
                
//             // arbitrum 2
//             // let response = await axios.get(
//             //     `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
//             //       );
//             //       let response2= await axios.get(
//             //         `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
//             //       );

//             // arbitrum 3
// //    let response = await axios.get(
// //                 `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xd586E7F844cEa2F87f50152665BCbc2C279D8d70&sellToken=WAVAX&sellAmount=2000000000000000000&slippagePercentage=0.04`
// //                   );
// //   let response2 = await axios.get(
// //                     `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WAWAX&sellAmount=2000000000000000000&slippagePercentage=0.04`
// //                       );

// //arbitrum 4
// //    let response = await axios.get(
// //                 `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //                   );

// //  let response2 = await axios.get(
// //                     `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //                       );


// //binance 5 
// // let response = await axios.get(
// //     `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //       );
// // let response2 = await axios.get(
// //         `https://arbitrum.api.0x.org/swap/v1/quote?buyToken=USDC&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`
// //           );


//     // binance 6
//             // let response = await axios.get(
//             //     `https://avalanche.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WETH&sellAmount=1000000000000000000&slippagePercentage=0.04`

//             //       );


//                   swapQuoteJSON=response.data;
//             let WETH=await ethers.getContractAt("IWETH",
//             response.data.tx,
//                 deployer
//                 );   
//                 // const user_balance1=await WETH.balanceOf(deployer.address);
//                 // console.log("-------------",user_balance1.toString(),"----------------");
//                 // await WETH.deposit({
//                     //     value: 10000000000000
//                     // }); 
//                     console.log("at line 70");
                    
//                     const max_approve= BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399");
//                     // const txResponseWETH= await WETH.approve(response.data.allowanceTarget,max_approve)
//                     console.log("---------------------At line 74------------------");
//                     // const txResponseWETH1= await WETH.approve(alphaVaultSwap.address,max_approve)
//                     console.log("at line 76");
//                     // await txResponseWETH.wait(1);
//                     await txResponseWETH1.wait(1);
//                     console.log(deployer.address);
//                     let allowance1 = await WETH.allowance(deployer.address,alphaVaultSwap.address);
//                     console.log("--------80---")
//                     console.log(allowance1.toString());
//                     const user_balance2=await WETH.balanceOf(deployer.address);
//                     console.log("at line 82");
//                     console.log("-------------",user_balance2.toString(),"----------------");
             

//                 // console.log("at Line 91");


// //binance 06
//                 // const txRes=await alphaVaultSwap.multiSwap(
//                 //     ['0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8','0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'],
//                 //     ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', '0x0000000000000000000000000000000000000000','0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',response.data.buyTokenAddress],
//                 //     [response2.data.to,'0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000'],
//                 //     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget ],
//                 //     ['0x1230000000000000000001230000',response.data.data],
//                 //     [0,response.data.sellAmount]
//                 //     ,{value: BigInt("8193747396917710005")});
//                 //     const tx = await txRes.wait(1); 
//                 //     console.log("after function call");




// // binance 5
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1','0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'],
// //                     [response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     [response.data.to, response2.data.to],
// //                     [response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     [response.data.data, response2.data.data],
// //                     [response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");



// // arbitrum 4
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x0000000000000000000000000000000000000000','0x82aF49447D8a07e3bd95BD0d56f35241523fBab1','0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'],
// //                     ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [0,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");




// //arbitrum 3
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7','0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7','0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'],
// //                     [response.data.buyTokenAddress, '0x0000000000000000000000000000000000000000', response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [1,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");


// //avalanche 02 
// //   const txRes=await alphaVaultSwap.multiSwap(
// //                     ['0x0000000000000000000000000000000000000000','0x82aF49447D8a07e3bd95BD0d56f35241523fBab1','0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'],
// //                     ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', response.data.buyTokenAddress, response2.data.buyTokenAddress],
// //                     ['0x0000000000000000000000000000000000000000',response.data.to, response2.data.to],
// //                     ['0x0000000000000000000000000000000000000000',response.data.allowanceTarget , response2.data.allowanceTarget],
// //                     ['0x1230000000000000000001230000',response.data.data, response2.data.data],
// //                     [0,response.data.sellAmount, response2.data.sellAmount]
// //                     ,{value: BigInt("8193747396917710005")});
// //                     const tx = await txRes.wait(1); 
// //                     console.log("after function call");



// // //arbitrum 01
//                 const txRes=await alphaVaultSwap.multiSwap(
//                     ['0x0000000000000000000000000000000000000000' , '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'],
//                     ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1','0xaf88d065e77c8cC2239327C5EDb3A432268e5831'],
//                     ['0x0000000000000000000000000000000000000000',response.tx.to],
//                     ['0x0000000000000000000000000000000000000000',response.tx.value ],
//                     ['0x0000000000000000000000000000000000000000',response.tx.data],
//                     [0,response.tx.value]
//                     ,{value: BigInt("8193747396917710005")});
//                     const tx = await txRes.wait(1); 
//                     console.log("after function call");


//                 // console.log(tx);
//                 // let USDC=await ethers.getContractAt("IERC20",
//                 // '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
//                 //     deployer
//                 //     );
//                 //     const contractUSDC=await USDC.balanceOf(deployer.address)
//                 //     console.log("USDC balance-->",contractUSDC.toString());
    
    
//         //         let WMATIC=await ethers.getContractAt("IERC20",
//         //         response.data.sellTokenAddress,
//         //             deployer
//         //             );
//         //             const contractWMATIC=await WMATIC.balanceOf(deployer.address)
//         //             console.log("WEth balance-->",contractWMATIC.toString());
    
//                 // let DAI=await ethers.getContractAt("IERC20",
//                 // response.data.buyTokenAddress,
//                 //     deployer
//                 //     );
//                 //     const contractUSDT=await DAI.balanceOf(deployer.address)
//                 //     console.log("DAI balance-->",contractUSDT.toString());
//         }








//     });




// });






        