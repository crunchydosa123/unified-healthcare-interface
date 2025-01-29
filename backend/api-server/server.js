const express = require("express");
const { ethers } = require("hardhat");
const { v4: uuidv4 } = require('uuid'); // Import UUID package

const app = express();
app.use(express.json());

const PORT = 3000;

// Connect to the local Hardhat node
const provider = new ethers.JsonRpcProvider("http://localhost:8545");
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";  // Update with new contract address
const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "patientId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "PatientAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uuid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_disease",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_medicalHistory",
        "type": "string[]"
      }
    ],
    "name": "addPatient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uuid",
        "type": "string"
      }
    ],
    "name": "getPatient",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "disease",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "medicalHistory",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uuid",
        "type": "string"
      }
    ],
    "name": "patientExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const patientDataContract = new ethers.Contract(contractAddress, contractABI, provider);

// POST /patients - Store a new patient's data on the blockchain
app.post("/patients", async (req, res) => {
    const { name, age, disease, medicalHistory } = req.body;
    const patientUUID = uuidv4(); // Generate a unique UUID for the new patient

    const [signer] = await ethers.getSigners();
    const contractWithSigner = patientDataContract.connect(signer);

    try {
        const tx = await contractWithSigner.addPatient(patientUUID, name, age, disease, medicalHistory);
        await tx.wait(); // Wait for transaction to be mined
        res.status(201).json({ message: "Patient added successfully", txHash: tx.hash, patientUUID });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add patient", error });
    }
});

// GET /patients/:id - Fetch a patient's data from the blockchain using UUID
app.get("/patients/:uuid", async (req, res) => {
    const patientUUID = req.params.uuid;

    try {
        const patient = await patientDataContract.getPatient(patientUUID);
        res.status(200).json({ patient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve patient data", error });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
