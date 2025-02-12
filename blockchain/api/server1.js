import Web3 from "web3";  // ES6 import
const web3 = new Web3("http://127.0.0.1:9545");
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors());
// Smart contract details
const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "items",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_item",
          "type": "string"
        }
      ],
      "name": "addItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getItems",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getItemCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];

const contractAddress = "0x8894684c38EC604bB3417F9934E0694Fe9Ac4666"; // Replace after deploying
const contract = new web3.eth.Contract(contractABI, contractAddress);


const accounts = await web3.eth.getAccounts();
const acc = accounts[0];

async function getAccount() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0]; // Use first account
}

app.post("/addItem", async (req, res) => {
    try {
        const { item } = req.body;
        if (!item) return res.status(400).json({ error: "Item is required" });

        const account = await getAccount();
        await contract.methods.addItem(item).send({ from: account });

        res.json({ message: `✅ Item '${item}' added successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get all items from the contract
app.get("/getItems", async (req, res) => {
    try {
        const items = await contract.methods.getItems().call();
        res.json({ items });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get item count
app.get("/getItemCount", async (req, res) => {
    try {
        const count = await contract.methods.getItemCount().call();
        res.json({ count: Number(count) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});