import React from 'react';
import './buttonCyan.css'
import {Link} from "react-router-dom";

function ButtonCyan(props: { text: string, link: string }) {
  return (
    <Link to={props.link}>
      <button type="button" className="buttonCyan">{props.text}</button>
    </Link>
  )
}

export default ButtonCyan;
