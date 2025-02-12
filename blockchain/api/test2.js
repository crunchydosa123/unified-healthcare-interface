import Web3 from "web3";  // ES6 import
const web3 = new Web3("http://127.0.0.1:9545");

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

async function testAdd(item, account) {
    try {
        await contract.methods.addItem(item).send({ from: account });
        console.log(`✅ Added item: ${item}`);
    } catch (error) {
        console.error("❌ Error adding item:", error);
    }
}

async function testItemCount() {
    const count = await contract.methods.getItemCount().call();
    console.log(`🔢 Item Count: ${count}`);
}

async function getItems() {
    const items = await contract.methods.getItems().call();
    console.log("📜 Items:", items);
}

// Run the tests in sequence
(async () => {
    const account = await getAccount();
    await testAdd("Item 1", account);
    await testItemCount();
    await getItems();
})();