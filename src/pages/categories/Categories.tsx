import React, {useEffect, useState} from 'react';
import CategoryItem from "../../components/categoryItem/CategoryItem";
import './categories.css';
import axios from "axios";
import {ICategory} from "../../shared/interfaces/ICategory";
import Loader from "../../components/loader/Loader";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    axios.get("http://localhost:8080/categories").then(res => setCategories(res.data));
  }, []);
  return (
    <>
      {
        loading ?
          <Loader/>
          :
          <main className="categories">
            {categories.map((category: ICategory) => (
              <CategoryItem image={category.image} title={category.title} name={category.name}/>))}
          </main>
      }
    </>
  )
}

export default Categories;
