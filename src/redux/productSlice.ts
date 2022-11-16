import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IBucket} from "../shared/interfaces/IBucket";
import {IBucketProduct} from "../shared/interfaces/IBucketProduct";
import {IChangeProduct} from "../shared/interfaces/IChangeProduct";
import {RootState} from "./store";

const initialState: IBucket = {
  items: JSON.parse(localStorage.getItem("bucket") || "[]"),
  totalPrice: JSON.parse(localStorage.getItem("bucket") || "[]").reduce((prev: number, next: IBucketProduct) => prev + (next.product.price * next.count), 0)
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IBucketProduct>) => {
      const index = state.items.findIndex((item: IBucketProduct) => {
        return action.payload.product.id === item.product.id
      });
      if (index > -1) {
        state.items[index].count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("bucket", JSON.stringify(state.items));
    },
    changeCount: (state, action: PayloadAction<IChangeProduct>) => {
      const index = state.items.findIndex((item: IBucketProduct) => {
        return action.payload.prod.product.id === item.product.id;
      });
      if (action.payload.isMinus) {
        if (state.items[index].count > 1) {
          state.items[index].count--;
        }
      } else {
        state.items[index].count++;
      }
      localStorage.setItem("bucket", JSON.stringify(state.items));
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item: IBucketProduct) => {
        return action.payload === item.product.id
      });
      state.items.splice(index, 1);
      localStorage.setItem("bucket", JSON.stringify(state.items));
    }
  }
});

export const getTotalSum = (state: RootState) => {
  const total = 0;
  state.products.items.reduce((prev: number, next: IBucketProduct) => prev + (next.product.price * next.count), total);
  return total;
};

export const {addItem, changeCount, remove} = productSlice.actions;

export default productSlice.reducer;
