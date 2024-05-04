
require ('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "Testnet",
  networks:{
    hardhat:{},
    Testnet: {
      chainId: 842,
      url: "https://rpc.testnet.taraxa.io",
      accounts: ["5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702"],
    }
  }
};


// THis  dapp is deployed on the calibration testnet: 0x8Cf40E23D205dFC19f5A0Ba6bF97722f25EDE856