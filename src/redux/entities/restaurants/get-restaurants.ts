import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRequestStatus, selectRestaurantIds } from "./slice";
import type { RestaurantItem } from "../../../types/normalized-restaurants";
import type { RootState } from "../../store";

export const getRestaurants = createAsyncThunk<RestaurantItem[], void, { state: RootState }>(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = (await response.json()) as RestaurantItem[];
    if (!result.length) {
      return rejectWithValue("No restaurants found");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectRestaurantIds(state).length === 0 || selectRequestStatus(state) === "idle";
    },
  }
);
