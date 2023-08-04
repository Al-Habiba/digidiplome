const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const diplomeRegistry = await hre.ethers.deployContract("DiplomeRegistry");

  await diplomeRegistry.waitForDeployment();

  console.log(`Digidiplome deployed at ${await diplomeRegistry.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
