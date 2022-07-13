require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    bb:{
      url: "https://backend.buildbear.io/node/vigorous-hodgkin-2738bb",
    }
  }
};
