import {ICategory} from "./ICategory";

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  categoryName: ICategory;
}
