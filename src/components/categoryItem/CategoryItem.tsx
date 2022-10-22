import React from 'react';
import './categoryItem.css';
import {ICategory} from "../../shared/interfaces/ICategory";
import {Link} from "react-router-dom";

function CategoryItem(props: ICategory) {
  const link = `/catalog/${props.name}`;
  return (
    <Link to={link} >
      <div className="leader" data-aos="fade-up">
        <img src={props.image} alt="leader"/>
        <span>{props.title}</span>
      </div>
    </Link>
  )
}

export default CategoryItem;
