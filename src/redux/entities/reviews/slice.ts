import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";
import type { Review } from "../../../types/normalized-restaurants";

type ReviewsState = {
  ids: string[];
  entities: Record<string, Review>;
};
const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {} as Record<string, Review>),
};

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (state: ReviewsState, id: string) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
