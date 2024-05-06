import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/NavBar.css'
import LoginPage from './LoginPage.js';

function NavBar() {
  let navfunction = useNavigate();
  const routeChange = param => () => {navfunction(param)}
  const [isLoginDisplay, setIsLoginDisplay] = useState(false);

  return (
    <div id='navbar'>
      <div style={{display:'flex',width:'100%'}}>
        <div style={{width:'20%'}}>
          <a href='/'><img id='logo-style' src={require('../assets/JP Movies_Logo_Long.png')}/></a>
        </div>
        <div className='navbarwordings'>
          <div className='menuSpacing'><a href='/'>HOME</a></div>
          <div className='menuSpacing'><a href='/movies'>MOVIES</a></div>
          <div className='menuSpacing'><a href='/cinema'>CINEMAS</a></div>
          <div className='menuSpacing'><a href='/promotions'>PROMOTION</a></div>
        </div>
        <div style={{width:'20%'}}>
          <button id='login-button' onClick={() => setIsLoginDisplay(true)}>Login</button>
          <LoginPage isLoginDisplay={isLoginDisplay} setIsLoginDisplay={setIsLoginDisplay}></LoginPage>
        </div>
      </div>
    </div>
  )
}

export default NavBar