
const { expect, assert } = require("chai");
const { ethers, getNamedAccounts, network } = require("hardhat")
const axios = require('axios');
const { BigNumber, utils  } = require("ethers");
const helpers = require("@nomicfoundation/hardhat-network-helpers");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { ChainId } = require("@biconomy/core-types");
const SmartAccount = require("@biconomy/smart-account").default;
require('dotenv').config()

// at line 67 
// weth at goerli - done 
// OX api for georli ?
// after line 74 is left tobe checked 
// checking for eth -> WETH + Dai

describe("AlphaVault", function() {

it("this should make the gasless transaction using biconomy SDK ", async function() {


    console.log("------------------------");

    const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const rpcUrl = "https://rpc.ankr.com/bsc/150aa8fab13e61e50ba49ac1cd0c06e26ae190e4c907691044886fdda314bfb6";


    const walletProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    [provider] = await ethers.getSigners();



    const eoa = await walletProvider.getSigner().getAddress();

// console.log("------------------------EOA Address -----------------------------------------",eoa);

    const wallet = new SmartAccount(walletProvider, {

        activeNetworkId: ChainId.BSC_MAINNET,
        supportedNetworksIds: [ChainId.BSC_MAINNET, ChainId.POLYGON_MAINNET, ChainId.POLYGON_MUMBAI],
        networkConfig: [
            {
            chainId: ChainId.BSC_MAINNET,
            dappAPIKey: "drceLA82x.b3d626fc-f384-4efb-8b35-4393d26bbfb6",
            providerUrl: rpcUrl
            }
        ]
    });

// console.log("Wallet-------------------",wallet);

    const smartAccount = await wallet.init();
    console.log(smartAccount);
    const addressX = await smartAccount.getSmartAccountState();
    console.log(`SmartAccount address: ${addressX.address}`);

  
console.log("-------------------Smart Account Made -------------------");
const tx = await smartAccount.deployWalletUsingPaymaster();
await tx.wait(1);
console.log("---------smart account deployed by paymaster---------------");


// 0x should provide this for goerli 
  let responseapi = await axios.get(
                `https://api.0x.org/swap/v1/quote?buyToken=0xE68104D83e647b7c1C15a91a8D8aAD21a51B3B3E&sellAmount=1000000000&sellToken=0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6&takerAddress=0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC`
                  );

const erc20Interface = new ethers.utils.Interface([
    'function multiSwap( IERC20[] calldata fromToken, IERC20[] calldata toToken, address[] calldata spender, address payable[] calldata to, bytes[] calldata data, uint256[] memory amount)'
  ])

  const encodedData = erc20Interface.encodeFunctionData(
    'multiSwap', [['0x0000000000000000000000000000000000000000','0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'],['0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', responseapi.data.buyTokenAddress],['0x0000000000000000000000000000000000000000',responseapi.data.to],['0x0000000000000000000000000000000000000000',responseapi.data.allowanceTarget ], ['0x1230000000000000000001230000',responseapi.data.data], [0,responseapi.data.sellAmount]]
  )
//   ,{value: BigInt("8193747396917710005")});
// to be checked after this 

const txn = {
    to: usdcAddress, // put the address of the dpeloyed contract 
    data: encodedData
  }

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

  const txResponse = await smartAccount.sendTransaction({ transaction: txn });
  console.log('userOp hash', txResponse.hash);
  // If you do not subscribe to listener, one can also get the receipt like shown below 
  const txReciept = await txResponse.wait();
  console.log('Tx hash', txReciept.transactionHash);


    });

});

