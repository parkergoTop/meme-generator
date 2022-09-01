import React from "react";
import logo from "/src/image/app-logo.png"
import "./Header.css"

export default function Header(){
    return(
        <nav className="header">
           <img className="meme-app-logo" src={logo}/>
           <h3 className="meme-app-title">Meme Generator</h3>
        </nav>
    );
}