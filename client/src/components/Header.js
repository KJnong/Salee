import React from 'react';
import '../App.css';
import logo from "../img/2c913cc0-05a6-4c34-aa32-30142c2eb7da_200x200.png"

function Headers(){
    return(
        <header>
            <div className="logo">
              <img src={logo} className="App-logo" alt="image" />  
            </div>
          </header>
    )
}

export default Headers;