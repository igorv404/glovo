import React, {useEffect, useState} from 'react';
import './productPage.css';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState({id: 1, image: "", name: "Not found", price: 0, categoryName: {name: ""}});
  const [productPrice, setProductPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then(res => {
      setProduct(res.data);
      setProductPrice(res.data.price);
    });
  }, [id]);
  const changeCount = (isMinus: boolean) => {
    if (isMinus) {
      if (product.price - productPrice !== 0) {
        setProduct({
          id: product.id,
          image: product.image,
          name: product.name,
          price: product.price - productPrice,
          categoryName: product.categoryName
        });
      }
    } else {
      setProduct({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price + productPrice,
        categoryName: product.categoryName
      });
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
                <p>{product.price}$</p>
                <button className="priceChanger" onClick={() => changeCount(false)}>+</button>
              </div>
              <button className="addBtn">Buy</button>
            </div>
          </main>
      }
    </>
  )
}

export default ProductPage;
