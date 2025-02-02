const hre = require("hardhat");

async function main() {
    const initialSupply = hre.ethers.parseEther("1000"); // 1000 tokens

    const MyToken = await hre.ethers.deployContract("MyToken", [initialSupply]);

    await MyToken.waitForDeployment();
    
    console.log(`MyToken deployed to: ${await MyToken.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
