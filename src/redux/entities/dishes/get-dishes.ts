import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { MenuItem } from "../../../types/restaurants";

export const getDishes = createAsyncThunk<MenuItem[], string, { state: RootState }>(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
      const result = await response.json();
      if (!result.length) {
        return rejectWithValue("Dishes not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  }
);
