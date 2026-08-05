import React,{Component, useState} from "react";
import Web3 from "web3/dist/web3.min.js";
import Button from 'react-bootstrap/Button';
import { loadWeb3 } from "../Web3Functions";

const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// const networkID  = localStorage.getItem('networkID', networkID);
// const userBalance =  localStorage.getItem('userBalance', userBalance);

export class SignIn extends Component{
    
    handleLogin = event =>{
       loadWeb3();
       
    }
   

    render(){
        return(
            <div className="container mt-5">
            <img src="./banner.jpeg" className="img-fluid" alt=""/>
            <h1 className="m-3 text-center">Welcome to Elevate Marketing Team!</h1>
            <p className="m-3 text-center">Learn about our amazing products and services.</p>
            <div className="home-content">
            <img src="./metamask.png" alt=""/>
            <Button variant="primary"  onClick={this.handleLogin}>Login with MetaMask</Button>
            </div>
        </div>
        )
    }
}