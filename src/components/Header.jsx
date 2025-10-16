import React from "react";
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Header() {
    return(
      <header>
        <div className="logo-name">
            <img src={logo} alt="logo" className="logo"/>
            <h2>Alexis Moungang</h2>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div> 
        
      </header>

    
      
    )
}