const { ethers } = require("hardhat");
const { expect } = require("chai");

let contract;

before(async()=>{
  console.log("***Starting tests***");
  const RevertTest = await ethers.getContractFactory("RevertTest");
  contract = await RevertTest.deploy();
  await contract.deployed();
  console.log("Revert Deployed to : ", contract.address);
})

describe("RevertTest", function () {

  describe("Revert 1", function () {
    it("Should revert with reason \"Reverted 1\"", async function () {
      await expect(contract.revert1())
      .to.be.revertedWith("Reverted 1")
    });
  });

  describe("Revert 2", function () {
    it("Should revert with reason \"Reverted 2\"", async function () {
      await expect(contract.revert2())
      .to.be.revertedWith("Reverted 2")
    });
  });

  describe("Revert 3", function () {
    it("Should revert with reason \"Reverted 3\"", async function () {
      await expect(contract.revert3())
      .to.be.revertedWith("Reverted 3")
    });
  });

  describe("Revert 4", function () {
    it("Should revert with reason \"Reverted 4\"", async function () {
      await expect(contract.revert4())
      .to.be.revertedWith("Reverted 4")
    });
  });

  describe("Revert 5 Custom Error", function () {
    it("Should revert with reason \"CustomError\"", async function () {
      await expect(contract.revert5())
      .to.be.revertedWithCustomError(
        contract,
        "MY_CUSTOM_ERROR"
      );
    });
  });

});
