const hre = require("hardhat");

async function main() {
  const PatientData = await hre.ethers.getContractFactory("PatientData");
  const patientData = await PatientData.deploy();
  await patientData.deployed();

  console.log("PatientData contract deployed to:", patientData.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
