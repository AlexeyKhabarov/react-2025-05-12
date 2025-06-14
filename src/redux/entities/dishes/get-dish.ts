import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { MenuItem } from "../../../types/restaurants";
import { selectDishIds, selectRequestStatus } from "./slice";

export const getDish = createAsyncThunk<MenuItem, string, { state: RootState }>(
  "dishes/getDish",
  async (dishId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
      const result = await response.json();
      if (!result) {
        return rejectWithValue("Dish not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectDishIds(state).length === 0 || selectRequestStatus(state) === "idle";
    },
  }
);
