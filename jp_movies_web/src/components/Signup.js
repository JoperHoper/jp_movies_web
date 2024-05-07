import React from 'react'
import {useRef} from 'react';
import forge from 'node-forge';
import aesKey from '../aes_key';
import IV from '../initialization_vector';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/signup.css'

function Signup() {
    const navigate = useNavigate();

    let utf8Encoder = new TextEncoder();
    let secretKey = '';
    fetch(aesKey).then(r => r.text()).then(text => {secretKey = utf8Encoder.encode(text);});
    let initializationVector = '';
    fetch(IV).then(r => r.text()).then(text => {initializationVector = text;});

    function handleClick() {
        var cipher = forge.cipher.createCipher('AES-CBC', forge.util.createBuffer(secretKey));
        cipher.start({iv: IV});
        cipher.update(forge.util.createBuffer(passwordRef.current.value));
        cipher.finish();
        let encryptedPassword = cipher.output;
        let gender = "";
        if (genderMaleRef.current.checked === true) {
            gender = "M";
        }
        else if (genderFemaleRef.current.checked === true) {
            gender = "F";
        }
        if (genderNoRef.current.checked === true) {
            gender = "N";
        }
    
        axios({
          method: 'post',
          url: 'http://localhost:3100/signup',
          data: {
            "username": usernameRef.current.value,
            "password": encryptedPassword.toHex(),
            "firstname": firstNameRef.current.value,
            "lastname": lastNameRef.current.value,
            "dob": dobRef.current.value,
            "email": emailRef.current.value,
            "mobile": mobileRef.current.value,
            "gender": gender
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
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const genderMaleRef = useRef(null);
    const genderFemaleRef = useRef(null);
    const genderNoRef = useRef(null);
    const dobRef = useRef(null);
    const emailRef = useRef(null);
    const mobileRef = useRef(null);

  return (
    <div id='signUpForm'>
      <h2 id='createAccHeader'>Create Account</h2>
      <div className='rowElementStyle'>
        <div className='leftElement'>
            <div className='leftAlignment'><label htmlFor='firstname'>First Name:</label></div>
            <div className='leftAlignmentBar'><input ref={firstNameRef} type='text' id='firstname' placeholder='Enter First Name' autoComplete="on" required></input></div>
        </div>
        <div className='rightElement'>
            <div className='rightAlignment'><label htmlFor='lastname'>Last Name:</label></div>
            <div className='rightAlignmentBar'><input ref={lastNameRef} type='text' id='lastname' placeholder='Enter Last Name' autoComplete="on" required></input></div>
        </div>
      </div>
      <div className='rowElementStyle'>
        <div className='leftElement'>
            <div className='leftAlignment'><label htmlFor='email'>Email:</label></div>
            <div className='leftAlignmentBar'><input ref={emailRef} type='email' id='email' placeholder='Enter Email' autoComplete="on" required></input></div>
        </div>
        <div className='rightElement'>
          <div className='rightAlignment'><label htmlFor='mobile'>Mobile Number:</label></div>
          <div className='rightAlignmentBar'><input ref={mobileRef} type='tel' maxLength={8} id='mobile' placeholder='Enter Mobile Number' autoComplete="on" required></input></div>
        </div>
      </div>  
        <div className='rowElementStyle'>
          <div className='leftElement'>
            <div className='leftAlignment'><label htmlFor='dob'>Date of Birth</label></div>
            <div className='leftAlignmentBarDOB'><input ref={dobRef} type='date' id='dob'></input></div>
        </div>
        <div id='radioElement'>
            <div id='rightAlignment'><label htmlFor='gender'>Gender:</label></div>
            <div id='genderAlignment'>
              <label htmlFor='gender_male'>Male</label>
              <input ref={genderMaleRef} name='gender' type='radio' id='gender_male' value='Male' autoComplete="on"></input>
              <label htmlFor='gender_female'>Female</label>
              <input ref={genderFemaleRef} name='gender' type='radio' id='gender_female' value='Female' autoComplete="on"></input>
              <label htmlFor='gender_no'>Others</label>
              <input ref={genderNoRef} name='gender' type='radio' id='gender_no' value='Prefer Not to Say' autoComplete="on"></input> 
            </div>
        </div>
      </div>
      <div className='rowElementStyle'>
        <div className='leftElement'>
            <div className='leftAlignment'><label htmlFor='username'>Username:</label></div>
            <div className='leftAlignmentBar'><input ref={usernameRef} type='text' id='username' placeholder='Enter Username' autoComplete="on" required></input></div>
        </div>
        <div className='rightElement'>
          <div className='rightAlignment'><label htmlFor='password'>Password:</label></div>
          <div className='rightAlignmentBar'><input ref={passwordRef} type='text' id='password' placeholder='Enter Password' autoComplete="on" required></input></div>
        </div>
      </div>
        <div className='form-elements'>
            <button className='signUpButton' onClick={handleClick}>Sign Up</button>
          </div>
    </div>
  )
}

export default Signup