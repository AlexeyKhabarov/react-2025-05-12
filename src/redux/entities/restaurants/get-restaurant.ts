import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RestaurantItem } from "../../../types/normalized-restaurants";
import type { RootState } from "../../store";

export const getRestaurant = createAsyncThunk<RestaurantItem, string, { state: RootState }>(
  "restaurants/getRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantId}`);
      const result = await response.json();
      if (!result) {
        return rejectWithValue("Restaurant not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  }
);
