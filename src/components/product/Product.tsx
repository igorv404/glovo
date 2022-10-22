import React from 'react';
import './product.css';
import {IProduct} from "../../shared/interfaces/IProduct";
import {Link} from "react-router-dom";

function Product(props: IProduct) {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="product">
        <img src={props.image} alt="product"/>
        <h2>{props.name}</h2>
        <div className="bottomOfProduct">
          <p>{props.price}$</p>
          <button>Buy</button>
        </div>
      </div>
    </Link>
  )
}

export default Product;
