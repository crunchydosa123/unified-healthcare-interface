import { ethers } from 'ethers';

// Your deployed contract address (replace with actual address)
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function logContractAddressAndMethods() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    console.log("Contract methods:", contract.functions);
}

logContractAddressAndMethods();
