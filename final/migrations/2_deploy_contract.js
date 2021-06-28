const MyToken = artifacts.require("MyToken");

const fs = require('fs')
const abiPath = './src/blockchain/deploy/'

module.exports = async function (deployer) {
  deployer.deploy(MyToken).then(() => {
    prefix = 'myToken'
    if (MyToken._json) {
      // 1. Record recently deployed contract's abi file to 'deployedABI'
      fs.writeFile(
        abiPath + prefix + 'DeployedABI',
        JSON.stringify(MyToken._json.abi, 2),
        (err) => {
          if (err) throw err
          console.log(`The abi of ${MyToken._json.contractName} is recorded on deployedABI file`)
        })
    }

    // 2. Record recently deployed contract's address to 'deployedAddress'
    fs.writeFile(
      abiPath + prefix + 'DeployedAddress',
      MyToken.address,
      (err) => {
        if (err) throw err
        console.log(`The deployed contract address * ${MyToken.address} * is recorded on deployedAddress file`)
      })
  })
};