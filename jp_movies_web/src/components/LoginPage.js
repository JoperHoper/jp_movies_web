import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react';
import {useRef} from 'react';
import '../styles/loginpage.css'
import JSEncrypt from 'jsencrypt';

export default function LoginPage(props) {
  // Capture field values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handlePassInput = event => {
    setPassword(event.target.value);
  }

  const encrypt = (message) => {
    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbPqxYEJKCHnnwcb0/fzMhHM8xxDWnnWfvPIT+xWVXPDecqs3mxeFb7d3apq9BUCfDbGPrP7tLzAcTxS9KvU3NY+mbdwJEHKd3gBB14H0c57mII+OViipHm7pZqJbOzYuQm988Nk65Fi18E5yb+hD9FxI0co5OgNIGPJgL1OPKSQIDAQAB');
    return jsEncrypt.encrypt(message); 
  }

  function handleClick() {
    axios({
      method: 'post',
      url: 'http://localhost:3100/',
      data: {
        "username": usernameRef.current.value,
        "password": encrypt(passwordRef.current.value)
      }
    })
    .then(function (response) {
      console.log(response)
    });
  }
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (props.isLoginDisplay) ? (
    <div id='login-panel'>
      <div className='popup'>
        <button className='close-button' onClick={() => {props.setIsLoginDisplay(false)}}>&times;</button>
        <div className='login-form'>
          <h2>Log In</h2>
          <div className='form-elements'>
            <label for='email'>Email</label>
            <input ref={usernameRef} type='text' id='email' placeholder='Enter email'></input>
          </div>
          <div className='form-elements'>
            <label for='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' placeholder='Enter password'></input>
          </div>
          <div className='form-elements'>
            <input type='checkbox' id='remember-me'></input>
            <label for='remember-me'>Remember Me</label>
          </div>
          <div className='form-elements'>
            <button onClick={handleClick}>Sign In</button>
          </div>
          <div className='form-elements'>
            <a href='#'>Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

