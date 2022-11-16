import {IBucketProduct} from "./IBucketProduct";

export interface IBucket {
  items: IBucketProduct[],
  totalPrice: number
}
