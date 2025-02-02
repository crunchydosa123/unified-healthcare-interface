/** @type import('hardhat/config').HardhatUserConfig */
const { HardhatUserConfig } = require("hardhat/config");
require('dotenv').config({ path: '../.env' });  // Point to the root .env file
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.28",  // Adjust to your required Solidity version
    networks: {
        hardhat: {
          chainId: 31337, // Default Hardhat network chain ID
        },
      },
  };