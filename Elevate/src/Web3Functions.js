import Web3 from "web3/dist/web3.min.js";
import Elevate from "./Elevate.json";

const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');



export const loadWeb3 = async () => {
    
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    const acc = web3.currentProvider.selectedAddress;
    console.log(acc);
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  } 
};

export const GetAccounts = async () => {
    const accounts = await web3.eth.getAccounts();
    const currentaccount = accounts[0]; 
    const userBalance = await web3.eth.getBalance(accounts[0]);
    const networkID = await web3.eth.net.getId();
    localStorage.setItem('currentaccount', currentaccount);
    localStorage.setItem('networkId', networkID);
    const newbalance = (userBalance/1000000000000000000).toFixed(7);
    
    localStorage.setItem('balance', newbalance);
  
    const elevate = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkID].address);
    //console.log(elevate);
    const caddress = await Elevate.networks[networkID].address;
    //console.log(caddress);
   localStorage.setItem('caddress', caddress);
    console.log(localStorage.getItem('caddress', caddress));
    const currentUrl = window.location.href;
    console.log(currentUrl);
    window.location.replace(currentUrl)
     //window.location.reload(false);


  }

export const deleteAccount = () =>{
  const currentaccount1 = localStorage.getItem('currentaccount');
  localStorage.removeItem('currentaccount');
  localStorage.clear();
  console.log("clear")
  const currentUrl = window.location.href;
  console.log(currentUrl);
  window.location.replace(currentUrl)
  
  window.location.reload(false);
}

export const loadData = async () =>{
  const accounts = await web3.eth.getAccounts();
  const networkID = await web3.eth.net.getId();
  const auth = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkID].address);
  console.log(auth);
  return { auth, accounts: accounts[0] };
}


export const buyOne = async () => {
  const networkId = await web3.eth.net.getId();
  const contractaddress = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkId].address);
  const accounts = localStorage.getItem('currentaccount');
  console.log(accounts);
  const depositBal = await contractaddress.methods.deposit().send({from: accounts, value: 20});
  console.log(depositBal);
  }


export const buyTwo = async () => {
  const networkId = await web3.eth.net.getId();
  const contractaddress = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkId].address);
  const accounts = localStorage.getItem('currentaccount');
  const depositBal = await contractaddress.methods.deposit().send({from: accounts, value: 15});
  console.log(depositBal);
  }

export const buyThree = async () => {
  const networkId = await web3.eth.net.getId();
  const contractaddress = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkId].address);
  const accounts = localStorage.getItem('currentaccount');
  const depositBal = await contractaddress.methods.deposit().send({from: accounts, value: 10});
  console.log(depositBal);
  console.log(contractaddress);
  }

  export const loadBlockchainData = async () => {
    //const web3 = window.web3;
    window.ethereum.enable();
    const web3 = new Web3(window.web3.currentProvider);
    // console.log(web3);
    
    
    
    // Load account
    const accounts = await web3.eth.getAccounts();
    const networkID = await web3.eth.net.getId();
    const userBalance = await web3.eth.getBalance(accounts[0]);
    const userBalanceN = await web3.utils.fromWei((userBalance).toString(), 'ether');
    const networkId = await web3.eth.net.getId();
    if (networkId) {
      const auth = new web3.eth.Contract( Elevate.abi, Elevate.networks[networkId].address);
      return { auth, accounts: accounts[0] };
      }
    };
   