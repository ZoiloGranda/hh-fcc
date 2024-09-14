require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")

module.exports = {
 solidity: "0.8.7",
 defaultNetwork: "hardhat",
 networks: {
  sepolia: {
   url: process.env.SEPOLIA_RPC_URL,
   accounts: [process.env.PRIVATE_KEY],
   chainId: 11155111,
   blockConfirmations: 6
  }
 },
 namedAccounts: {
  deployer: {
   default: 0
  },
  user: {
   default: 1
  }
 },
 etherscan: {
  apiKey: process.env.ETHERSCAN_API_KEY
 },
 gasReporter: {
  enabled: false,
  outputFile: "gas-report.txt",
  noColors: true,
  currency: "USD",
  coinmarketcap: process.env.COINMARKETCAP_API_KEY
 }
};
