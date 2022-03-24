import React from "react";
import {useState} from 'react';

function Pagina1(){
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    return(
       <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> LOGIN </span>
  
            <div className="wrap-input">
              <input 
              className={email !== "" ? 'has-val input' : 'input'}
              type="email"
              value={email}
              onChange = {e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>   
            </div>
  
            <div className="wrap-input">
              <input
               className={password !== "" ? 'has-val input' : 'input'}
               type="password"
               value={password}
                onChange = {e => setPassword(e.target.value)}
               />
              <span className="focus-input" data-placeholder="Password"></span>   
            </div>
  
            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
  
          <div className="text-center">
            <span className="txt1">Não possui conta ? </span>  
  
            <a className="txt2" href="About2"> criar conta </a>
  
          </div>
            </form>
          </div>
        </div>
       </div>
  
    );
  }