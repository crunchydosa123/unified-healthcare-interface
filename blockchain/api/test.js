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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
    }
  ];

const contractAddress = "0x71545a82421190467Ed1a090b41aeAFECE31D208"; // Replace after deploying
const contract = new web3.eth.Contract(contractABI, contractAddress);


async function main(){
    try{
        const result = await contract.methods.meow().call();
    console.log(result);
    }catch(error){
        console.log(error);
    }
    
}

main();




