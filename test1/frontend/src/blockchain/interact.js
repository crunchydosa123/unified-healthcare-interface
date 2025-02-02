import { ethers } from "ethers";
import contractABI from './abi.json' assert { type: 'json' };

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const getContract = async () => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed. Please install it to use this app.");
  }
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  console.log("Contract methods:", contract.functions);
  return new ethers.Contract(contractAddress, abi, signer);
};

export const addPatient = async (name, age, medicalHistory, doctor) => {
  try {
    const contract = getContract(); 
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Medical History:", medicalHistory);
    console.log("Doctor:", doctor);

    // Call the `addPatient` function on the contract
    const txResponse = await contract.addPatient(name, age, medicalHistory, doctor); 
    console.log("Transaction sent, waiting for confirmation...");
    
    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log("Transaction mined:", receipt.transactionHash);
    return receipt;
  } catch (error) {
    console.error("Error adding patient:", error);
    throw error; // Re-throw the error for further handling
  }
};

export const updateMedicalHistory = async (medicalHistory) => {
  try {
    const contract = getContract(); // Get the contract instance
    console.log("Updating medical history:", medicalHistory);

    // Call the `updateMedicalHistory` function on the contract
    const txResponse = await contract.updateMedicalHistory(medicalHistory);
    console.log("Transaction sent, waiting for confirmation...");
    
    // Wait for the transaction to be mined
    const receipt = await txResponse.wait();
    console.log("Medical history updated, transaction hash:", receipt.transactionHash);
    return receipt;
  } catch (error) {
    console.error("Error updating medical history:", error);
    throw error; // Re-throw the error for further handling
  }
};

export const getPatient = async (patientAddress) => {
  const contract = await getContract();
  const patient = await contract.getPatient(patientAddress);
  return patient;
};


getContract();
