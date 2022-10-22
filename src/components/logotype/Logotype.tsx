import React from 'react';
import './logotype.css';

function Logotype(props: {image: string}) {
  const redirectToHomePage = () => {
    window.location.href = "/";
  }

  return (<img src={props.image} className="logo" alt="logo" onClick={redirectToHomePage}/>)
}

export default Logotype;
