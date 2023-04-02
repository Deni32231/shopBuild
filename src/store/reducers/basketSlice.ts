import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../components/ProductCard/ProductCard";

interface IItem {
  product: IProduct;
  count: number;
}

export interface IBusketState {
  items: IItem[];
  priceAllItems: number;
  countAllItems: number;
}

const initialState: IBusketState = {
  items: [],
  priceAllItems: 0,
  countAllItems: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const findIndex = state.items.findIndex(
        (item) => item.product.barcode === action.payload.barcode
      );

      if (findIndex !== -1) {
        state.items[findIndex].count += 1;
      } else {
        state.items.push({ product: action.payload, count: 1 });
      }
      state.priceAllItems += action.payload.price;
      state.countAllItems += 1;
    },
    removeItem: (state, action: PayloadAction<IProduct>) => {
      const findIndex = state.items.findIndex(
        (item) => item.product.barcode === action.payload.barcode
      );

      if (state.items[findIndex].count === 1) {
        state.items = state.items.filter(
          (item) => item.product.barcode !== action.payload.barcode
        );
      } else {
        state.items[findIndex].count -= 1;
      }
      state.priceAllItems -= action.payload.price;
      state.countAllItems -= 1;
    },
    addItemWithCount: (state, action: PayloadAction<IItem>) => {
      const findIndex = state.items.findIndex(
        (item) => item.product.barcode === action.payload.product.barcode
      );

      if (findIndex !== -1) {
        state.items[findIndex].count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }

      state.priceAllItems +=
        action.payload.product.price * action.payload.count;
      state.countAllItems += action.payload.count;
    },
    deleteItem: (state, action: PayloadAction<IProduct>) => {
      const findIndex = state.items.findIndex(
        (item) => item.product.barcode === action.payload.barcode
      );

      state.countAllItems -= state.items[findIndex].count;
      state.priceAllItems -=
        state.items[findIndex].product.price * state.items[findIndex].count;

      state.items = state.items.filter(
        (item) => item.product.barcode !== action.payload.barcode
      );
    },
    clearBasket: (state) => {
      state.countAllItems = 0;
      state.items = [];
      state.priceAllItems = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  addItemWithCount,
  deleteItem,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
