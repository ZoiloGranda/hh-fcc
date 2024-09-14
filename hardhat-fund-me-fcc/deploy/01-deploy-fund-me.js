const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
 const { deploy, log } = deployments
 const { deployer } = await getNamedAccounts()
 const chainId = network.config.chainId
 let ethUsdPriceFeedAddress
 if (chainId == 31337) {
  const ethUsdAggregator = await deployments.get("MockV3Aggregator")
  ethUsdPriceFeedAddress = ethUsdAggregator.address
 } else {
  ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
 }
 log("----------------------------------------------------")
 log("Deploying FundMe and waiting for confirmations...")
 const fundMe = await deploy("FundMe", {
  from: deployer,
  args: [ethUsdPriceFeedAddress],
  log: true
 })
 log("-------------------")
}

module.exports.tags = ["all", "fundme"]