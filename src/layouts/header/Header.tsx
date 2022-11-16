import React from 'react';
import './header.css';
import Logotype from './../../components/logotype/Logotype';
import logo from './../../assets/images/logotypes/logo.svg';
import bucket from './../../assets/images/icons/bucket.svg';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <Logotype image={logo}/>
      <Link to={"/bucket"}>
        <img src={bucket} className="bucketIcn" alt="bucket"/>
      </Link>
    </header>
  )
}

export default Header;
