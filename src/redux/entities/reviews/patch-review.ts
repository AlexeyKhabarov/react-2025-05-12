import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { ReviewItem } from "../../../types/restaurants";

export const patchReview = createAsyncThunk<
  ReviewItem,
  { reviewId: string; review: Omit<ReviewItem, "id"> },
  { state: RootState }
>("reviews/patchReview", async ({ reviewId, review }, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:3001/api/review/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    if (!response.ok) {
      const error = await response.json();
      return rejectWithValue(error.message || "Failed to update review");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message || "Error");
  }
});
