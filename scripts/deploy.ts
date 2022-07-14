import { ethers } from "hardhat";

(async () => {
  const Test = await ethers.getContractFactory("Test");
  const test = await Test.deploy();

  await test.deployed();

  console.log("Contract deployed to:", test.address);
})()
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
