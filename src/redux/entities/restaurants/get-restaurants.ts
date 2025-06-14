import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRequestStatus, selectRestaurantIds } from "./slice";
import type { RestaurantItem } from "../../../types/normalized-restaurants";
import type { RootState } from "../../store";

export const getRestaurants = createAsyncThunk<RestaurantItem[], void, { state: RootState }>(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/restaurants");
      const result = await response.json();
      if (!result.length) {
        return rejectWithValue("Restaurants not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectRestaurantIds(state).length === 0 || selectRequestStatus(state) === "idle";
    },
  }
);
