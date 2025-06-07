import { createSlice, createSelector } from "@reduxjs/toolkit";

type CartState = Record<string, number>;

export const cartSlice = createSlice({
  name: "cartSlice",
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
  },
  selectors: {
    selectCartItems: (state: CartState) =>
      Object.keys(state).reduce<{ id: string; amount: number }[]>((acc, id) => {
        acc.push({ id, amount: state[id] });
        return acc;
      }, []),
    selectItemAmountById: (state: CartState, id: string) => state[id] || 0,
  },
});

// const selectCart = (state) => state.cart;
// export const selectCartItems = createSelector([selectCart], (cartSlice) =>
//   Object.keys(cartSlice).reduce((acc, id) => {
//     acc.push({ id, amount: cartSlice[id] });
//     return acc;
//   }, [])
// );

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectItemAmountById } = cartSlice.selectors;
