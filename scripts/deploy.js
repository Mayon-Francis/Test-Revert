const hre = require("hardhat");

async function main() {
  const RevertTest = await hre.ethers.getContractFactory("RevertTest");
  const revertTest = await RevertTest.deploy();

  await revertTest.deployed();

  console.log("RevertTest deployed to:", revertTest.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
