import React from 'react';
import './header.css';
import ButtonCyan from './../../components/buttonCyan/ButtonCyan';
import Logotype from './../../components/logotype/Logotype';
import logo from './../../assets/images/logotypes/logo.svg';
import user from './../../assets/images/icons/user.svg';
import bucket from './../../assets/images/icons/bucket.svg';

function IsLog() {
  return localStorage.getItem('user')
    ? (<div className="userLinks">
        <img src={user} className="user" alt="user"/>
        <img src={bucket} className="bucket" alt="bucket"/>
    </div>
      )
    : ButtonCyan({text: "Get started", link: "/categories"});
}

function Header() {
  return (
    <header>
      <Logotype image={logo}/>
      <IsLog/>
    </header>
  )
}

export default Header;
