const { findContractDeployer } = require("@alch/alchemy-sdk")
const { deployContract } = require("ethereum-waffle")
const { ethers, run, network } = require("hardhat")


module.exports=async({getNamedAccounts,deployments})=>{
  const{deploy,log}=deployments;
  const{deployer}=await getNamedAccounts()
  const AlphaVault=await deploy("AlphaVaultSwap",{
    from:deployer,
    args:[],
    log:true,
  })
  console.log(AlphaVault)
  const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}
if(true){
await verify("0x9E0A0f6C446b71F94Bd28a859C14370Fa63F4c7f",[]);
}
}