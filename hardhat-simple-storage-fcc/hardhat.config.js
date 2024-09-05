require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("./tasks/block-number")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 networks: {
  sepolia: {
   url: process.env.SEPOLIA_RPC_URL,
   accounts: [process.env.PRIVATE_KEY],
   chainId: 11155111
  }
 },
 solidity: "0.8.7",
};
