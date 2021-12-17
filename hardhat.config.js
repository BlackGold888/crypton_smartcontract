require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
require('./tasks/donate');

const INFURA_API_KEY = "7f8e4c8f492c4a0ea04c40f61ba04144";
const ROPSTEN_PRIVATE_KEY = "0xc794fec4bebbf5560ee2fc0c2535ba3bfc9c3972dd4a9a7678a0ec82d921a73b";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
