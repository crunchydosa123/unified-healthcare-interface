import Web3 from "web3";  // ES6 import
const web3 = new Web3("http://127.0.0.1:9545");
import { v4 as uuidv4 } from 'uuid';

// Smart contract details
const contractABI =   [
  {
    "inputs": [],
    "name": "doctorCount",
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
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "doctors",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "patientCount",
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
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "patients",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
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
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "height",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "surgeries",
    "outputs": [
      {
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "patientId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "doctorId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "surgeryCount",
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
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
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
        "internalType": "uint256",
        "name": "_weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_height",
        "type": "uint256"
      }
    ],
    "name": "addDoctor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDoctors",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "id",
                "type": "string"
              },
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
                "internalType": "uint256",
                "name": "weight",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "height",
                "type": "uint256"
              }
            ],
            "internalType": "struct Patients.Patient[]",
            "name": "patients",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Patients.Doctor[]",
        "name": "",
        "type": "tuple[]"
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
        "name": "_surgeryid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_doctorid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_patientid",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "addSurgery",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
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
        "internalType": "uint256",
        "name": "_weight",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_height",
        "type": "uint256"
      }
    ],
    "name": "addPatient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPatients",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
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
            "internalType": "uint256",
            "name": "weight",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "height",
            "type": "uint256"
          }
        ],
        "internalType": "struct Patients.Patient[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getPatientCount",
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
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "getDoctor",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
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
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "getSurgery",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
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
        "name": "_id",
        "type": "string"
      }
    ],
    "name": "getPatient",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
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
const contractAddress = "0xDCf93d04498726FaE0A88e81d0c91aE6A1839e37"; 
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getAccount() {
    const accounts = await web3.eth.getAccounts();
    return accounts[0]; 
}

async function testAddPatient(name, age, weight, height){
    try {
        const account = await getAccount(); 
        const id = uuidv4();
        await contract.methods.addPatient(id, name, age, weight, height).send({ from: account, gas: 500000 });
        return id;
        console.log(`✅ Patient added: ${name}`);
    } catch (error) {
        console.error("❌ Error adding patient:", error);
    }
}

async function testGetPatientCount(){
    try {
        const account = await getAccount(); 
        const res = await contract.methods.getPatientCount().call({ from: account, gas: 500000 });
        console.log({res: Number(res)});
    } catch (error) {
        console.error("❌ Error adding patient:", error);
    }
}

async function testGetAllPatients(){
    try {
        const account = await getAccount(); 
        const res = await contract.methods.getPatients().call();
        console.log(res);
    } catch (error) {
        console.error("❌ Error fething patients:", error);
    }
}

async function testAddSurgery(doctorid, patientid, description){
  try {
      const account = await getAccount(); 
      const id = uuidv4();
      const res = await contract.methods.addSurgery(id, doctorid, patientid, description).send({ from: account, gas: 500000 });;
      console.log("Surgery added: ", res);
      return id;
  } catch (error) {
      console.error("❌ Error adding doctor:", error);
  }
}

async function testAddDoctor(name, age, weight, height){
  try {
      const account = await getAccount(); 
      const id = uuidv4();
      const res = await contract.methods.addDoctor(id, name, age, weight, height).send({ from: account, gas: 500000 });;
      console.log("Doctor added: ", res);

      return id;
  } catch (error) {
      console.error("❌ Error adding doctor:", error);
  }
}

async function testGetAllDoctors(){
  try {
      const account = await getAccount(); 
      const res = await contract.methods.getDoctors().call();
      console.log("Doctors: ", res);
  } catch (error) {
      console.error("❌ Error fething doctors:", error);
  }
}

async function testGetSingleDoctors(id){
  try {
      const account = await getAccount(); 
      const res = await contract.methods.getDoctor(id).call();
      console.log("Doctor found: ", res);
  } catch (error) {
      console.error("❌ Error fething doctors:", error);
  }
}


async function testGetSinglePatient(id){
  try {
      const account = await getAccount(); 
      const res = await contract.methods.getPatient(id).call();
      console.log("Patient found: ", res);
  } catch (error) {
      console.error("❌ Error fething doctors:", error);
  }
}

(async () => {
    const patient_id = await testAddPatient("Joe Biden", 99, 78, 180);
    const doctor_id = await testAddDoctor("Dr. Jane Doe", 30, 70, 180);
    await testGetAllDoctors();
    const surgery_id = await testAddSurgery(doctor_id, patient_id, "Knee Surgery");
    //await testGetPatientCount();
    await testGetSingleDoctors(doctor_id);
    testGetSinglePatient(patient_id);
    //await testGetAllPatients();
})();

export {testAddDoctor, testAddPatient, testAddSurgery, testGetAllDoctors, testGetAllPatients, testGetSingleDoctors, testGetSinglePatient};