const hre = require("hardhat");

const tokens = (nToken) => {
    return ethers.utils.parsedUnits(nToken.toString(),"ethers");
}

async function main() {
    const _initialSupply = tokens(50000000);

    const TheBlockchainCoders = await hre.ethers.getContractFactory("TheBlockchainCoders");

    const theBlockchainCoders = await TheBlockchainCoders.deploy(_initialSupply);

    await theBlockchainCoders.deployed();

    console.log(`TheBlockchainCoders: ${theBlockchainCoders.address}`);

    const _tokenPrice = tokens(1);

    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy(theBlockchainCoders.address,_tokenPrice);
}

