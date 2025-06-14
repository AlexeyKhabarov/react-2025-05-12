import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type CartState = Record<string, number>;

export const cartSlice = createSlice({
  name: "cart",
  initialState: {} as Record<string, number>,
  reducers: {
    addToCart: (state: CartState, { payload }) => {
      if (typeof payload !== "string") return;
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state: CartState, { payload }) => {
      if (typeof payload !== "string") return;

      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
    clearCart: () => {
      return {};
    },
  },
  selectors: {
    //---оставил для себя---
    // selectCartItems: (state: CartState) =>
    //   Object.keys(state).reduce<{ id: string; amount: number }[]>((acc, id) => {
    //     acc.push({ id, amount: state[id] });
    //     return acc;
    //   }, []),
    selectItemAmountById: (state: CartState, id: string) => state[id] || 0,
  },
});

const selectCart = (state: RootState) => state.cart;
const selectAllDishes = (state: RootState) => state.dishes.entities;
export const selectCartWithDishNames = createSelector([selectCart, selectAllDishes], (cartState, dishEntities) => {
  return Object.keys(cartState).map((id) => ({
    id,
    amount: cartState[id],
    name: dishEntities[id]?.name,
  }));
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const { selectItemAmountById } = cartSlice.selectors;
