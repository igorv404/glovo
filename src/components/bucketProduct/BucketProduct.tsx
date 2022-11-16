import React from "react";
import "./bucketProduct.css"
import bin from "./../../assets/images/icons/bin.png";
import {IBucketProduct} from "../../shared/interfaces/IBucketProduct";
import {useAppDispatch} from "../../redux/hooks";
import {changeCount, remove} from "../../redux/productSlice";
import {IChangeProduct} from "../../shared/interfaces/IChangeProduct";

function BucketProduct(props: IBucketProduct) {
  const dispatch = useAppDispatch();
  const deleteFromBucket = (id: number) => {
    dispatch(remove(id));
  }
  const changeCountForItem = (elem: IBucketProduct, isMin: boolean) => {
    const changer: IChangeProduct = {
      prod: elem,
      isMinus: isMin
    }
    dispatch(changeCount(changer));
  }
  return (
    <div className="bucketProduct">
      <div className="bucketProductLeft">
        <img src={props.product.image} alt={props.product.name}/>
        <p className="productName">{props.product.name}</p>
      </div>
      <div className="bucketProductRight">
        <div className="countSwitchers">
          <button onClick={() => changeCountForItem(props, true)}>-</button>
          <p>{props.count}</p>
          <button onClick={() => changeCountForItem(props, false)}>+</button>
        </div>
        <p>{props.product.price * props.count}$</p>
        <img className="bin" src={bin} alt="bin" onClick={() => deleteFromBucket(props.product.id)}/>
      </div>
    </div>
  )
}

export default BucketProduct;
