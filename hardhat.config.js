require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle")
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    bb:{
      url: "https://backend.buildbear.io/node/vigorous-hodgkin-2738bb",
    },
    bbAnvil:{
      url: "https://anvil.backend.buildbear.io/node/eager-napier-0e509a",
    },
  }
};
