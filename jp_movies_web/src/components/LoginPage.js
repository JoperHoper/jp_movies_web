import React, { useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react';
import {useRef} from 'react';
import '../styles/loginpage.css'
import forge from 'node-forge';
import aesKey from '../aes_key';
import IV from '../initialization_vector';
import { useNavigate } from 'react-router-dom';

export default function LoginPage(props) {
  const navigate = useNavigate();

  let utf8Encoder = new TextEncoder();
  let secretKey = '';
  fetch(aesKey).then(r => r.text()).then(text => {secretKey = utf8Encoder.encode(text);});
  let initializationVector = '';
  fetch(IV).then(r => r.text()).then(text => {initializationVector = text;});

  // Capture field values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    setUsername(event.target.value);
  };

  const handlePassInput = event => {
    setPassword(event.target.value);
  }

  function handleClick() {
    var cipher = forge.cipher.createCipher('AES-CBC', forge.util.createBuffer(secretKey));
    cipher.start({iv: IV});
    cipher.update(forge.util.createBuffer(passwordRef.current.value));
    cipher.finish();
    let encryptedPassword = cipher.output;

    axios({
      method: 'post',
      url: 'http://localhost:3100/',
      data: {
        "username": usernameRef.current.value,
        "password": encryptedPassword.toHex()
      }
    })
    .then(function (response) {
      console.log(response)
      if (response.data) {
        if (response.data.message && response.data.message === 'login success') {
          navigate('/promotions');
        }
      }
    });
  }
  
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (props.isLoginDisplay) ? (
    <div id='login-panel'>
      <div className='popup'>
        <button className='close-button' onClick={() => {props.setIsLoginDisplay(false)}}>&times;</button>
        <div className='login-form'>
          <h2>Login</h2>
          <div className='form-elements'>
            <label htmlFor='email'>Email</label>
            <input ref={usernameRef} type='text' id='email' placeholder='Enter email' autoComplete="on"></input>
          </div>
          <div className='form-elements'>
            <label htmlFor='password'>Password</label>
            <input ref={passwordRef} type='password' id='password' placeholder='Enter password' autoComplete="on"></input>
          </div>
          <div className='form-elements'>
            <input type='checkbox' id='remember-me'></input>
            <label htmlFor='remember-me'>Remember Me</label>
          </div>
          <div className='form-elements'>
            <button onClick={handleClick}>Sign In</button>
          </div>
          <div className='form-elements'>
            <div><a href='/signup'>Sign Up</a></div>
          </div>
          <div className='form-elements'>
            <a href='#'>Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}

