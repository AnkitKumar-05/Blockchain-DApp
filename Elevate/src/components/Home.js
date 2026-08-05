import React,{Component} from "react";
import Web3 from "web3/dist/web3.min.js";
import Button from 'react-bootstrap/Button';

import { GetAccounts , deleteAccount} from "../Web3Functions";

const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
const currentaccount1 = localStorage.getItem('currentaccount');
const balance = localStorage.getItem('balance');
const network = localStorage.getItem('networkId');
const caddress = localStorage.getItem('caddress');

console.log("account " , currentaccount1 )

export class Home extends Component{
    handleDetails = event =>{
        GetAccounts();
        
     }

    render(){
        return(
            <div className="container mt-5" >
            <img src="./banner.jpeg" className="img-fluid" alt=""/>
            <h1 className="m-3 text-center">Welcome to Elevate Marketing Team!</h1>
            <p className="m-3 text-center">Learn about our amazing products and services.</p>
            <Button variant="primary" onClick={this.handleDetails}>Get MetaMask Account Details </Button>
            <p>Account Address: {currentaccount1} </p>
            <p>Account Balance: {balance} SepoliaETH</p>
            <p>Account Network Id: {network} </p>
            <p>Contract Address: {caddress} </p>
            <Button variant="danger" onClick={deleteAccount}>Logout to your Session</Button>
            <p>Welcome to Elevate, where we use cutting-edge technology to help 
            businesses like yours elevate their marketing strategies. Our team specializes in using smart 
            contracts and Metamask to create marketing campaigns that are secure, transparent, and efficient.</p>
            <p>With smart contracts, we can automate and streamline the process of executing marketing campaigns, 
                from creating and distributing content to tracking results and measuring ROI. And with Metamask, 
                we ensure that all transactions are secure and transparent, giving you peace of mind knowing that 
                your marketing budget is being spent wisely.</p>
            <p>At Elevate, we are passionate about helping businesses leverage the power of smart contracts and Metamask 
                to take their marketing strategies to the next level. Contact us today to learn more about how we can help 
                your business grow.</p>
            </div>
           
        )
    }
}