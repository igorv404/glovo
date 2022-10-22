import React, {useEffect, useState} from 'react';
import './catalog.css';
import {IProduct} from "../../shared/interfaces/IProduct";
import Product from './../../components/product/Product';
import {useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader/Loader";

function Catalog() {
  const [products, setItems] = useState<IProduct[]>([]);
  const [request, setRequest] = useState('');
  const {store} = useParams();
  const [isCheckedName, setIsCheckedName] = useState(false);
  const [isCheckedPrice, setIsCheckedPrice] = useState(false);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const sortByName = (arr: Array<IProduct>) => {
    return arr.sort((a: IProduct, b: IProduct) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  const sortByPrice = (arr: Array<IProduct>) => {
    return arr.sort((a: IProduct, b: IProduct) => {
      return b.price - a.price;
    });
  }

  const sorting = (isByName: boolean) => {
    if (isByName) {
      setIsCheckedName(!isCheckedName);
      setIsCheckedPrice(false);
      if (!isCheckedName) {
        setItems(prevState => sortByName([...prevState]));
      } else {
        axios.get("http://localhost:8080/products").then(res => {
          setItems(res.data.filter((element: IProduct) => element.categoryName.name === store));
        });
      }
    } else {
      setIsCheckedPrice(!isCheckedPrice);
      setIsCheckedName(false);
      if (!isCheckedPrice) {
        setItems(prevState => sortByPrice([...prevState]));
      } else {
        axios.get("http://localhost:8080/products").then(res => {
          setItems(res.data.filter((element: IProduct) => element.categoryName.name === store));
        });
      }
    }
  }

  const search: Array<IProduct> = products.filter((product: IProduct) => {
    return product.name.toLowerCase().includes(request.toLowerCase())
  });
  useEffect(() => {
    axios.get("http://localhost:8080/products").then(res => {
      setItems(res.data.filter((element: IProduct) => element.categoryName.name === store));
    })
  }, [store]);
  return (
    <>
      {
        loading ?
          <Loader/>
          :
        <main className="catalog">
          <aside>
            <div className="searchArea">
              <input type="text" id="search" placeholder="Search" onChange={(event) => setRequest(event.target.value)}/>
            </div>
            <h2>Sort by:</h2>
            <div className="sortCat">
              <input type="checkbox" id="name" checked={isCheckedName} onChange={() => sorting(true)}/>
              <label htmlFor="name">name</label>
            </div>
            <div className="sortCat">
              <input type="checkbox" id="price" checked={isCheckedPrice} onChange={() => sorting(false)}/>
              <label htmlFor="price">price</label>
            </div>
          </aside>
          <div className="products">
            {search.map((product: IProduct, id: number) => (
              <Product image={product.image} name={product.name} price={product.price} id={product.id} key={id}
                       categoryName={product.categoryName}/>))}
          </div>
        </main>
      }
    </>
  )
}

export default Catalog;
