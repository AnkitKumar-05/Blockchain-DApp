import React from "react";

import './App.css';
import { Home } from './components/Home';
import { BuyServices } from './components/BuyServices';
import { AboutUs } from './components/AboutUs';



import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from "./components/SignIn";
import Enquiry from "./components/Enquiry";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <div className="">
    <Navigation/>
    <Routes>
    <Route path="/" Component={SignIn} exact />
    <Route path="/about" Component={AboutUs} exact />
    <Route path="/buy" Component={BuyServices} exact />
    <Route path="/home" Component={Home} exact />
    <Route path="/enquiry" Component={Enquiry} exact />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
