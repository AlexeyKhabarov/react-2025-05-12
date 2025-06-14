import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { ReviewItem } from "../../../types/restaurants";

export const getReviews = createAsyncThunk<ReviewItem[], string, { state: RootState }>(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
      const result = await response.json();
      if (!result.length) {
        return rejectWithValue("Reviews not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  }
);
