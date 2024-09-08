const { ethers } = require("hardhat")

async function main() {
 const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
 console.log("Deploying contract...")
 const simpleStorage = await SimpleStorageFactory.deploy()

 console.log("Waiting for blocks confirmation...")
 await simpleStorage.deploymentTransaction().wait(1);
 console.log(`Deployed contract to: ${await simpleStorage.getAddress()}`)

 const currentValue = await simpleStorage.retrieve()
 console.log(`current value is: ${currentValue}`)

 const transactionReponse = await simpleStorage.store(7)
 await transactionReponse.wait(1)
 const updatedValue = await simpleStorage.retrieve()
 console.log(`updated value is: ${updatedValue}`)
}
main().then(() => process.exit(0))
 .catch((error) => {
  console.log(error);
  process.exit(1)
 })