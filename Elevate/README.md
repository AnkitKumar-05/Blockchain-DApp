# ElevateDApp — Blockchain-Based Marketing Services DApp

ElevateDApp is a decentralised application (DApp) built on the Ethereum blockchain. It allows users to connect their MetaMask wallet, browse and purchase marketing service packages, and submit enquiries — all secured and processed through a Solidity smart contract.

> 📄 A full project report is included in this repository: **`akum22113886-blockchain-report.pdf`**

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Running the App](#running-the-app)
- [Smart Contract](#smart-contract)
- [Available Scripts](#available-scripts)

---

## Prerequisites

Before running the project, ensure you have the following installed and configured:

| Requirement | Version | Notes |
|---|---|---|
| [Node.js](https://nodejs.org/) | v16+ | Required to run the React app and npm scripts |
| [npm](https://www.npmjs.com/) | v8+ | Comes bundled with Node.js |
| [MetaMask](https://metamask.io/) | Latest | Browser extension wallet — required to interact with the DApp |
| [Truffle](https://trufflesuite.com/) | v5+ | Used to compile and deploy the Solidity smart contract |
| [Ganache](https://trufflesuite.com/ganache/) | v7+ | Local Ethereum blockchain for development and testing |
| [Git](https://git-scm.com/) | Any | To clone the repository |

> **MetaMask** must be installed in your browser (Chrome or Firefox recommended). You will need to connect it to your local Ganache network to use the app locally.

---

## Tech Stack

- **Frontend:** React 18, React Router v6, Bootstrap 5, React-Bootstrap
- **Blockchain:** Solidity (Smart Contract), Web3.js v1, Ethereum (via MetaMask)
- **Development Network:** Ganache (local Ethereum blockchain)
- **Contract Tooling:** Truffle

---

## Project Structure

```
ElevateDApp/
├── Elevate/                        # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js             # Home page
│   │   │   ├── SignIn.js           # Wallet connection / sign-in page
│   │   │   ├── BuyServices.js      # Purchase marketing service packages
│   │   │   ├── Enquiry.js          # Submit an enquiry via the smart contract
│   │   │   ├── AboutUs.js          # About page
│   │   │   └── Navigation.js       # Navbar component
│   │   ├── Web3Functions.js        # Web3 / blockchain interaction helpers
│   │   ├── Elevate.json            # Compiled smart contract ABI + network addresses
│   │   ├── App.js                  # Root component and routing
│   │   └── index.js                # React entry point
│   ├── public/                     # Static public assets
│   ├── build/                      # Production build output
│   └── package.json
└── akum22113886-blockchain-report.pdf   # Full project report
```

---

## Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AnkitKumar-05/Blockchain-DApp.git
cd Blockchain-DApp/Elevate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Ganache

Launch the Ganache application (GUI or CLI) to spin up a local Ethereum blockchain.

- **GUI:** Open the Ganache desktop app and click **Quickstart**
- **CLI:**
  ```bash
  npx ganache --port 7545
  ```

Note the **RPC Server URL** (default: `http://127.0.0.1:7545`) and one of the provided **private keys** — you will need these for MetaMask.

### 4. Configure MetaMask

1. Open MetaMask in your browser
2. Click the network dropdown → **Add a network manually**
3. Fill in:
   - **Network Name:** Ganache Local
   - **New RPC URL:** `http://127.0.0.1:7545`
   - **Chain ID:** `1337`
   - **Currency Symbol:** ETH
4. Import an account using one of the private keys from Ganache

### 5. Deploy the Smart Contract

From the `Elevate/` directory, deploy the contract to your local Ganache network using Truffle:

```bash
truffle migrate --reset --network development
```

This updates `src/Elevate.json` with the deployed contract address. Make sure your `truffle-config.js` points to the Ganache RPC URL and port.

---

## Running the App

Once Ganache is running and the contract is deployed:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. MetaMask will prompt you to connect your wallet on the Sign In page.

---

## Smart Contract

The `Elevate` smart contract (ABI defined in [`src/Elevate.json`](src/Elevate.json)) handles:

- **`deposit()`** — Accepts ETH payments for service package purchases
- **Enquiry event** — Emits an `enquiryCreated` event with name, email, and message when a user submits an enquiry

The contract must be deployed to the active Ganache network before the frontend can interact with it.

---

## Available Scripts

Run these from inside the `Elevate/` directory:

| Command | Description |
|---|---|
| `npm start` | Starts the development server at `http://localhost:3000` |
| `npm run build` | Creates an optimised production build in the `build/` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (irreversible) |

---

## Project Report

A detailed report covering the project design, smart contract architecture, implementation, and evaluation is available in the root of this repository:

📄 **[`akum22113886-blockchain-report.pdf`](../akum22113886-blockchain-report.pdf)**
