import {React , useState } from 'react';
import Web3 from "web3/dist/web3.min.js";
import Button from 'react-bootstrap/Button';
import { loadWeb3 } from "../Web3Functions";
//import "./SignIn.css";
import MyContract from "../Elevate.json";




const Enquiry = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(name , email , message);
  const handleClick = async () => {
       const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
       console.log(name);
       console.log(email);
       console.log(message);
       const networkId = await web3.eth.net.getId();
       const contract = new web3.eth.Contract( MyContract.abi, MyContract.networks[networkId].address);
       console.log(contract);
       const accounts = localStorage.getItem('currentaccount');
       const addPatient = await contract.methods.addEnquiry(name , email , message ).send({ from: accounts });
       console.log(addPatient);
     
  };


        return(
          <div className="enquiry-f">
            <img src="./enquiry.png" className="img-fluid" alt=""/>
            <h4>Enquiry/Suggestion</h4>
            <div className="custom-form">

              <label className="mt-3">Your Name</label>
               <input onChange={(e) => setName(e.target.value)} value={name}  type="text" name="name" placeholder="Enter your full name" className="form-control" />
               <label className="mt-3">Email address</label>
               <input onChange={(e) => setEmail(e.target.value)} value={email}  type="email" name="email" placeholder="eg: xyz@gmail.com" className="form-control"/>

               <label className="mt-3">Enquiry/Suggestion</label>
                 <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="form-control" placeholder="Enter your enquiry or suggestion here" name="message" > </textarea >

               <div className="text-center">
               <input type="submit" onClick={handleClick} className="btn mt-3 btn-primary" />
               </div>
              </div> 
            
            </div>
        )
    }
export default Enquiry;
