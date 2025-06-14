import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { postReview } from "./post-review";
import type { RootState } from "../../store";
import { FULFILLED, PENDING, REJECTED } from "../../../constants/constants";
import { getReviews } from "./get-reviews";
import { patchReview } from "./patch-review";
import type { ReviewItem } from "../../../types/restaurants";

const reviewsAdapter = createEntityAdapter<ReviewItem>();

type ReviewsState = ReturnType<typeof reviewsAdapter.getInitialState> & {
  requestStatus: "idle" | typeof PENDING | typeof FULFILLED | typeof REJECTED;
};

const initialState: ReviewsState = {
  ...reviewsAdapter.getInitialState({ requestStatus: "idle" }),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      //getReviews
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        reviewsAdapter.setAll(state, action.payload);
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      //postReview
      .addCase(postReview.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        reviewsAdapter.addOne(state, action.payload);
      })
      .addCase(postReview.rejected, (state) => {
        state.requestStatus = REJECTED;
      })
      //patchReview
      .addCase(patchReview.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(patchReview.fulfilled, (state, action) => {
        reviewsAdapter.updateOne(state, {
          id: action.payload.id,
          changes: action.payload,
        });
      })
      .addCase(patchReview.rejected, (state) => {
        state.requestStatus = REJECTED;
      });
  },
});

export const {
  selectById: selectReviewById,
  selectIds: selectReviewIds,
  selectEntities: selectReviewEntities,
} = reviewsAdapter.getSelectors<RootState>((state) => state[reviewsSlice.name]);

export const { selectRequestStatus } = reviewsSlice.selectors;
