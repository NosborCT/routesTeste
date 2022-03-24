import React from "react";
import {useState} from 'react';

function Pagina2() {
    const[nome,setNome] = useState("")
    const[sobrenome,setSobrenome] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmPassword,setconfirmPassword] = useState("")
  
  
    return (
      <div className="App">
        <div className="container-cadastro">
          <div className="wrap-cadastro">
            <form className="cadastro-form">
              <span className="cadastro-form-title">Realize o cadastro</span>
            
              
                {/*  Nome  */ }
  
              <div className="wrap-input">
                <input 
                className={nome !== "" ? 'has-val input' : 'input'}
                type="word"
                value={nome}
                onChange = {e => setNome(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>   
              </div>
               
               {/*  Sobrenome  */ }
  
                <div className="wrap-input">
                <input 
                className={sobrenome !== "" ? 'has-val input' : 'input'}
                type="word"
                value={sobrenome}
                onChange = {e => setSobrenome(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Sobrenome"></span>   
              </div>
               
  
             {/*  email  */ }
  
              <div className="wrap-input">
                <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange = {e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>   
              </div>
               
                {/*  Senha  */ }
  
              <div className="wrap-input">
                <input
                 className={password !== "" ? 'has-val input' : 'input'}
                 type="password"
                 value={password}
                  onChange = {e => setPassword(e.target.value)}
                 />
                <span className="focus-input" data-placeholder="Senha"></span>   
              </div>
  
              {/*  ConfirmarSenha  */ }
  
              <div className="wrap-input">
                <input
                 className={confirmPassword !== "" ? 'has-val input' : 'input'}
                 type="password"
                 value={confirmPassword}
                  onChange = {e => setconfirmPassword(e.target.value)}
                 />
                <span className="focus-input" data-placeholder="Confirmar Senha"></span>   
              </div>
              {/*  Botão de Cadastro  */ }
              <div className="container-cadastro-form-btn">
                <button className="cadastro-form-btn">Cadastrar</button>
              </div>
  
              {/*  Href para login    */ }
  
              <div className='text-center'>
                <span className='txt1'>Já possui conta ? </span>
  
                <a className="txt2" href="About"> Fazer Login </a>
  
              </div>
  
            </form>
          </div>
        </div>
      </div>
    );
  }