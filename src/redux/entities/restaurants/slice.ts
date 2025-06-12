import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { getRestaurants } from "./get-restaurants";
import type { RestaurantItem } from "../../../types/normalized-restaurants";

const entityAdapter = createEntityAdapter<RestaurantItem>();

type RestaurantsState = ReturnType<typeof entityAdapter.getInitialState> & {
  requestStatus: "idle" | "pending" | "fulfilled" | "rejected";
};

const initialState: RestaurantsState = {
  ...entityAdapter.getInitialState({ requestStatus: "idle" }),
  requestStatus: "idle",
};

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      });
  },
});
const selectRestaurantsSlice = (state: RootState) => state[restaurantsSlice.name];

export const { selectIds: selectRestaurantIds, selectById: selectRestaurantById } =
  entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;
