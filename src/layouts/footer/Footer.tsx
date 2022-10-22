import React from 'react';
import './footer.css';
import Logotype from './../../components/logotype/Logotype';
import logo from './../../assets/images/logotypes/glovo-white.webp';
import appStore from  './../../assets/images/download buttons/app-store-button-white.webp';
import googlePlay from './../../assets/images/download buttons/google-play-button-white.webp';

function Footer() {
  return (
    <footer>
      <Logotype image={logo}/>
      <div className="downloadLinksWhite">
        <img src={appStore} alt="App store"/>
        <img src={googlePlay} alt="Google play"/>
      </div>
    </footer>
  )
}

export default Footer;
