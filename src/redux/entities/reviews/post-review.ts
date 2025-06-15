import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { ReviewItem } from "../../../types/restaurants";

export const postReview = createAsyncThunk<
  ReviewItem,
  { restaurantId: string; review: Omit<ReviewItem, "id"> },
  { state: RootState }
>("reviews/postReview", async ({ restaurantId, review }, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:3001/api/reviews/${restaurantId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      const error = await response.json();
      return rejectWithValue(error.message || "Failed to post review");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message || "Error");
  }
});
