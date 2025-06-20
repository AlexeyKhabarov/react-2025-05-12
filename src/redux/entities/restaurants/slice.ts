import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { getRestaurants } from "./get-restaurants";
import type { RestaurantItem } from "../../../types/normalized-restaurants";
import { getRestaurant } from "./get-restaurant";
import { FULFILLED, PENDING, REJECTED } from "../../../constants/constants";

const entityAdapter = createEntityAdapter<RestaurantItem>();

type RestaurantsState = ReturnType<typeof entityAdapter.getInitialState> & {
  requestStatus: "idle" | typeof PENDING | typeof FULFILLED | typeof REJECTED;
};

const initialState: RestaurantsState = {
  ...entityAdapter.getInitialState({ requestStatus: "idle" }),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      .addCase(getRestaurant.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getRestaurant.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getRestaurant.rejected, (state) => {
        state.requestStatus = REJECTED;
      });
  },
});

export const { selectIds: selectRestaurantIds, selectById: selectRestaurantById } =
  entityAdapter.getSelectors<RootState>((state) => state[restaurantsSlice.name]);

export const { selectRequestStatus } = restaurantsSlice.selectors;
