import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { ethers } from 'ethers';

// Initialize dotenv
dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());
app.use(cors());

// Load environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = "http://127.0.0.1:8545";
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// Connect to blockchain
const provider = new ethers.JsonRpcProvider(RPC_URL, {
    chainId: 31337, // Make sure this matches your local Hardhat network chainId
    name: "hardhat", // Name of the network
    ensAddress: null, // Disable ENS resolution
  });
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Load contract ABI (interface)
import contractABI from './MyTokenABI.json' assert { type: 'json' };
const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);

// API: Get token balance
app.get("/balance/:address", async (req, res) => {
    try {
        const balance = await contract.balanceOf(req.params.address);
        res.json({ balance: ethers.formatEther(balance) });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// API: Transfer tokens
app.post("/transfer", async (req, res) => {
    try {
        const { to, amount } = req.body;
        const tx = await contract.transfer(to, ethers.parseEther(amount));
        await tx.wait();
        res.json({ message: "Transfer successful", txHash: tx.hash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
