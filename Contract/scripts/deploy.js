const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nFTMarketplace = await NFTMarketplace.deploy();

  await nFTMarketplace.deployed();

  console.log(`deployed to  ${nFTMarketplace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
