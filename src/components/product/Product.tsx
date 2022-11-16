import React from 'react';
import './product.css';
import {IProduct} from "../../shared/interfaces/IProduct";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import {addItem} from "../../redux/productSlice";
import {IBucketProduct} from "../../shared/interfaces/IBucketProduct";

function Product(props: IProduct) {
  const dispatch = useAppDispatch();
  const addToBucket = (product: IProduct) => {
    const cartItem: IBucketProduct = {
      product: product,
      count: 1
    }
    dispatch(addItem(cartItem));
  }
  return (
    <Link to={`/product/${props.id}`}>
      <div className="product">
        <img src={props.image} alt="product"/>
        <h2>{props.name}</h2>
        <div className="bottomOfProduct">
          <p>{props.price}$</p>
          <button onClick={() => addToBucket(props)}>Buy</button>
        </div>
      </div>
    </Link>
  )
}

export default Product;
