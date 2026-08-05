import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

function Navigation(){
    
        return(
            <Navbar collapseOnSelect bg="success" expand="lg">
            <a className="navbar-brand text-bold">
            ELEVATE
            </a>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav>
            <NavLink className=" p-2 text-white"
                to="/">Sign In</NavLink>
                <NavLink className=" p-2 text-white"
                to="/Home">Home</NavLink>
                <NavLink className=" p-2 text-white"
                to="/about">About Us</NavLink>
                <NavLink className=" p-2 text-white"
                to="/buy">Services</NavLink>
                <NavLink className=" p-2 text-white"
                to="/enquiry">Enquiry</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        )
    
     }
export default Navigation;