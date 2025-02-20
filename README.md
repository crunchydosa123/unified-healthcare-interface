# BlocDoc - Decentralized Patient Certificate Management

## 🏗 Project Overview
BlocDoc is a decentralized application (DApp) designed for managing patient records and issuing certificates securely using blockchain technology. The project consists of three main components:

- **Blockchain** (Truffle, Ganache): Smart contract-based certificate storage and validation.
- **Services** (Auth): Handles authentication and backend logic.
- **Frontend** (React): A user-friendly interface for interacting with the system.

## 📂 Project Structure
```
root/
│-- blockchain/       # Smart contracts (Truffle, Ganache)
│-- services/         # Backend services (Auth)
│-- frontend/         # React frontend
│-- README.md         # Project documentation
```

## 🚀 Getting Started
Follow these steps to set up and run the project.

### 1️⃣ Set Up Blockchain
Navigate to the `blockchain` directory, start Truffle's development environment, and deploy the contracts:
```sh
cd blockchain
truffle develop
migrate
```
Ensure Ganache is running to simulate a local Ethereum network.

### 2️⃣ Start Backend Services
Navigate to the authentication service and start the backend server:
```sh
cd services/auth
node server.js
```

### 3️⃣ Start Frontend
Navigate to the `frontend` folder, install dependencies, and start the development server:
```sh
cd frontend
npm install
npm run dev
```
The React frontend should now be accessible in the browser.

## 🎯 Features
- QR-based patient record lookup 📷
- Secure certificate issuance and validation using blockchain 🔗
- Role-based authentication for doctors and patients 🔑
- Decentralized storage for verifiable certificates ✅

## 🤝 Contributing
This is a personal project, but I will be happy to hear your suggestions and improve UHI!
1. Fork the repository 📌
2. Clone the project locally
3. Create a feature branch (`git checkout -b feature-name`)
4. Commit changes (`git commit -m 'Added feature'`)
5. Push to your branch (`git push origin feature-name`)
6. Open a pull request 🎉

## 📜 License
This project is licensed under the MIT License.

Happy coding! 🚀
