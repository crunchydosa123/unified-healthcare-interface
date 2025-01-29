const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const PatientData = await ethers.getContractFactory("PatientData");

    try{
        pd = await PatientData.deploy();
        address = await pd.getAddress();
        console.log("PatientData contract deployed to:", address);
    }catch(err){
        console.error(err);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
