import React, {useEffect, useState} from 'react';
import './productPage.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import {useAppDispatch} from "../../redux/hooks";
import {addItem} from "../../redux/productSlice";
import {IProduct} from "../../shared/interfaces/IProduct";
import {IBucketProduct} from "../../shared/interfaces/IBucketProduct";

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState<IProduct>({id: 1, image: "", name: "Not found", price: 0, categoryName: {name: "", title: "", image: ""}});
  const [productPrice, setProductPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const addToBucket = (count: number) => {
    const cartItem: IBucketProduct = {
      product: product,
      count: count
    }
    setProductPrice(product.price);
    setCount(1);
    dispatch(addItem(cartItem));
  }
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then(res => {
      setProduct(res.data);
      setProductPrice(res.data.price);
    });
  }, [id]);
  const changeCount = (isMinus: boolean) => {
    if (isMinus) {
      if (product.price - productPrice !== 0) {
        setProductPrice(product.price - productPrice);
        setCount(count - 1)
      }
    } else {
      setProductPrice(product.price + productPrice);
      setCount(count + 1);
    }
  }
  return (
    <>
      {
        loading ?
          <Loader/>
          :
          <main className="productPage">
            <section className="crips">
              <Link to={`/catalog/${product.categoryName.name}`}><p>back</p></Link>
            </section>
            <img src={product.image} alt="product"/>
            <div className="infoSide">
              <h2>{product.name}</h2>
              <div className="price">
                <button className="priceChanger" onClick={() => changeCount(true)}>-</button>
                <p>{productPrice}$</p>
                <button className="priceChanger" onClick={() => changeCount(false)}>+</button>
              </div>
              <button className="addBtn" onClick={() => addToBucket(count)}>Buy</button>
            </div>
          </main>
      }
    </>
  )
}

export default ProductPage;
