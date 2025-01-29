import { ethers } from "ethers";
import abi from "./abi.json";

const contractAddress = "YOUR_CONTRACT_ADDRESS";

const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};

export const addPatient = async (name, age, medicalHistory, doctorAddress) => {
  const contract = await getContract();
  const tx = await contract.addPatient(name, age, medicalHistory, doctorAddress);
  await tx.wait();
};

export const updateMedicalHistory = async (medicalHistory) => {
  const contract = await getContract();
  const tx = await contract.updateMedicalHistory(medicalHistory);
  await tx.wait();
};

export const getPatient = async (patientAddress) => {
  const contract = await getContract();
  const patient = await contract.getPatient(patientAddress);
  return patient;
};
