import React, {useEffect, useState} from "react";
import "./bucket.css";
import BucketProduct from "../../components/bucketProduct/BucketProduct";
import {useAppSelector} from "../../redux/hooks";
import {IBucketProduct} from "../../shared/interfaces/IBucketProduct";
import {getTotalSum} from "../../redux/productSlice";

function Bucket() {
  const storedItems = useAppSelector<IBucketProduct[]>(state => state.products.items);
  const amount = useAppSelector<number>(state => state.products.totalPrice);
  const [isBucketEmpty, setIsBucketEmpty] = useState(true);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("bucket") || "[]").length > 0) {
      setIsBucketEmpty(false);
    } else {
      setIsBucketEmpty(true);
    }
  }, [storedItems]);
  return (
    <main className="bucket">
      <>
        {isBucketEmpty ?
          <div className="emptyArea">
            <h2>There are nothing here :(</h2>
          </div>
          :
          <div className="itemsArea">
            <>
              {storedItems.map((bucketItem: IBucketProduct, index: number) => (
                <BucketProduct product={bucketItem.product} count={bucketItem.count}
                               key={index}/>
              ))}
            </>
          </div>
        }
      </>
      <div className="orderAmountArea">
        <p>Total price: {amount}$</p>
      </div>
    </main>
  )
}

export default Bucket;
