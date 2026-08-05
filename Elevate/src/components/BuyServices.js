import React,{Component} from "react";
import { buyOne, buyTwo, buyThree } from "../Web3Functions";

export class BuyServices extends Component{

    constructor(props) {
        super(props);
        
        this.state={
            yourname: '',
            enquiry: '',
            email: ''
        }
    }
    
    handleYournameChange = event =>{
        this.setState({
            yourname: event.target.value
        })
    }

    handleEmailChange = event =>{
        this.setState({
            email: event.target.value
        })
    }

    handleEnquiryChange = event =>{
        this.setState({
            enquiry: event.target.value
        })
    }

    handleSubmit = event =>{
        //alert(this.state.yourname +' '+this.state.email+' '+ this.state.enquiry)
        alert("You have Successfully Submitted the Enquiry/Suggestion")
    }
    
    render(){
        return(
            <div className="container mt-5">
            <h1 className="text-center">Buy Services</h1>
            <p className="text-center">Learn about our amazing products and services.</p>
            <h2 className="text-center">Our Services</h2>
            
<div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
        <img src="./consult.jpeg" className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Marketing Consulting</h5>
        <p className="card-text">Our marketing consulting services are designed to help businesses grow 
          and increase revenue by developing effective marketing strategies. 
          Our experienced consultants work closely with you to tailor our services
          to your unique business objectives, covering areas such as branding, social media, content marketing, and more.</p>
          <p> </p>
        <a href="#" className="btn btn-primary" onClick={buyOne}>Buy</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
  <div className="card">
        <img src="./social.jpeg" className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Social Media Management</h5>
        <p className="card-text">Managing social media can be time-consuming, but it's essential for any business looking to reach its target audience. 
          Our social media management services take care of everything from content creation to community management, 
          helping you increase engagement and drive more conversions.</p>
          <p> </p>
          <p> </p>
        <a href="#" className="btn btn-primary" onClick={buyTwo}>Buy</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
  <div className="card">
        <img src="./content.jpg" className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">Content Creation</h5>
        <p className="card-text">Content creation is essential for building a strong online presence, 
          but it can be challenging to consistently produce high-quality content. 
          Our content creation services take the hassle out of creating compelling content 
          that resonates with your target audience, whether you need blog posts, social media content, 
          videos, or other types of content.</p>
        <a href="#" className="btn btn-primary" onClick={buyThree}>Buy</a>
      </div>
    </div>
  </div>
</div>
</div>
            
        )
    }
}