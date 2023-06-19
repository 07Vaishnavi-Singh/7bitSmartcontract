const { expect, assert } = require("chai");
const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');
const { BigNumber, utils  } = require("ethers");
const helpers = require("@nomicfoundation/hardhat-network-helpers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { ChainId } = require("@biconomy/core-types");
const SmartAccount = require("@biconomy/smart-account").default;
const ContractArtifacts = require("../artifacts/contracts/AlphaVaultSwap.sol/AlphaVaultSwap.json");
require('dotenv').config()


// at line 67 
// weth at goerli - done 
// OX api for georli ?
// after line 74 is left tobe checked 
// checking for eth -> WETH + Dai

describe("AlphaVault", function() {

it("this should make the gasless transaction using biconomy SDK ", async function() {


    console.log("------------------------");

    const rpcUrl = "https://rpc.ankr.com/polygon/150aa8fab13e61e50ba49ac1cd0c06e26ae190e4c907691044886fdda314bfb6";

    const walletProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    [provider] = await ethers.getSigners();

    const eoa = await walletProvider.getSigner().getAddress();

// console.log("------------------------EOA Address -----------------------------------------",eoa);

    const wallet = new SmartAccount(walletProvider, {

        activeNetworkId: ChainId.POLYGON_MAINNET,
        supportedNetworksIds: [ChainId.POLYGON_MAINNET,ChainId.BSC_MAINNET,ChainId.POLYGON_MUMBAI],
        networkConfig: [
            {
            chainId: ChainId.POLYGON_MAINNET,
            dappAPIKey: "ayT31Vfix.7ce00cfd-2f8e-4958-bf6a-252a1d216e7e",
            providerUrl: rpcUrl
            }
        ]
    });

// console.log("Wallet-------------------",wallet);

    const smartAccount = await wallet.init();
    console.log(smartAccount);
    const addressX = await smartAccount.getSmartAccountState();
    console.log(`SmartAccount address: ${addressX.address}`);

const tx = await smartAccount.deployWalletUsingPaymaster();
await tx.wait(1);

console.log("---------smart account deployed by paymaster at address ---------------",smartAccount.address);
 
const gas_limit = 100000;

const depTx = {
  // from : provider.address ,
  to: addressX.address ,
  value: utils.parseEther("1.0"),
}

console.log("----------------------------64-------------------------------");
const txx = await  provider.sendTransaction(depTx);
await txx.wait(1);


console.log("---------------------------------67-----------------------------------");
const yyy = addressX.address ;
const balanceInWei = await walletProvider.getBalance(yyy) ;
// convert the balance to a readable unit (Ether)
console.log("--------------------------------71------------------------------------");
const balance = ethers.utils.formatEther(balanceInWei);

console.log("------------------------------------74-------------------------------------");
console.log("Balance of the new Cretaed contract Account -----------", balance);

console.log("-----------Some Ether deposited at the newly created contract account --------", );


// // 0x should provide this for polygon 
let responseapi = await axios.get(
  `https://polygon.api.0x.org/swap/v1/quote?buyToken=DAI&sellToken=WMATIC&sellAmount=10000000000&slippagePercentage=0.04`
    );

    let WETH=await ethers.getContractAt("IWETH",
responseapi.data.sellTokenAddress,                
provider
);

let DAI=await ethers.getContractAt("IERC20",
responseapi.data.buyTokenAddress,
    provider
    );

const contractDeployed = "0xC444435677D859DB1520d59E00557258b20Df8d8";

// const instance = await ethers.getContractAt("AlphaVaultSwap",contractDeployed, provider);

// console.log("Instance ------------------------------------------------",instance);

const sellToken = ['0x0000000000000000000000000000000000000000', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'];
const buyToken = ['0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', responseapi.data.buyTokenAddress];
const spender = ['0x0000000000000000000000000000000000000000', responseapi.data.to];
const swapTarget = ['0x0000000000000000000000000000000000000000', responseapi.data.allowanceTarget];
const swapCallData = ['0x1230000000000000000001230000', responseapi.data.data];
const amount = [0, responseapi.data.sellAmount];

const abiX = ContractArtifacts.abi ;
const xyz = new ethers.utils.Interface(abiX);
console.log("XYZ -------------------------------------------", xyz);

// const encodedData = xyz.encodeFunctionData(['multiSwap(IERC20[],IERC20[],address[],address[],bytes[],uint256[])'], [sellToken, buyToken, spender, swapTarget, swapCallData, amount]);

const encodedData = xyz.encodeFunctionData(
  'multiSwap', [sellToken, buyToken, spender, swapTarget, swapCallData, amount]
)

console.log('Encoded function data:--------------------------------', encodedData);


// address of 7bit smart contract deployed on polygon on planner 

const txn = {
    to: contractDeployed, // put the address of the dpeloyed contract 
    data: encodedData,
    value: utils.parseEther("0.0000000001"),
  } 
// console.log("Txn ------------------------------------------------------", txn);
  // errors 
  smartAccount.on('txHashGenerated', (response) => {
    console.log('txHashGenerated event received via emitter', response);
  });
  smartAccount.on('onHashChanged', (response) => {
    console.log('onHashChanged event received via emitter', response);
  });
  // Event listener that gets triggered once a transaction is mined
  
  smartAccount.on('txMined', (response) => {
    console.log('txMined event received via emitter', response);
  });
  // One can also get the transaction receipt as shown at the bottom. 
  
  // Event listener that gets triggered on any error
  smartAccount.on('error', (response) => {
    console.log('error event received via emitter', response);
  });

// console amount before swapping
const beforeBalance = await WETH.balanceOf(provider.address) ;
console.log("WETH balance before swap --------",beforeBalance.toString());
const beforeBalanceOfDAI = await DAI.balanceOf(provider.address) ;
console.log("DAI balance before swap --------",beforeBalanceOfDAI.toString());

const txResponse = await smartAccount.sendTransaction({ transaction: txn });
console.log('userOp hash', txResponse.hash);
// If you do not subscribe to listener, one can also get the receipt like shown below 
const txReciept = await txResponse.wait();
console.log('Tx hash', txReciept.transactionHash);

// console amount after swapping 
const lastBalance = await WETH.balanceOf(provider.address) ;
console.log("WETH balance after swap --------",lastBalance.toString());
const lastBalanceOfDAI = await DAI.balanceOf(provider.address) ;
console.log("DAI balance before swap --------",lastBalanceOfDAI.toString());

    });

});

