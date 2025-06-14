import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { MenuItem } from "../../../types/restaurants";
import type { RootState } from "../../store";
import { getDish } from "./get-dish";
import { getDishes } from "./get-dishes";
import { FULFILLED, PENDING, REJECTED } from "../../../constants/constants";

const dishesAdapter = createEntityAdapter<MenuItem>();

type DishesState = ReturnType<typeof dishesAdapter.getInitialState> & {
  requestStatus: "idle" | typeof PENDING | typeof FULFILLED | typeof REJECTED;
};

const initialState: DishesState = {
  ...dishesAdapter.getInitialState({ requestStatus: "idle" }),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDish.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        dishesAdapter.setOne(state, payload);
      })
      .addCase(getDish.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        dishesAdapter.setAll(state, payload);
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = REJECTED;
      });
  },
});

export const { selectIds: selectDishIds, selectById: selectDishById } = dishesAdapter.getSelectors<RootState>(
  (state) => state[dishesSlice.name]
);
export const { selectRequestStatus } = dishesSlice.selectors;
