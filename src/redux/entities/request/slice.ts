import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type RequestState = Record<string, string>;
export const requestSlice = createSlice({
  name: "requestSlice",
  initialState: {} as RequestState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state, requestId) => state[requestId] || "idle",
    selectIsLoading: (state, requestId) => state[requestId] === "pending",
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = "pending";
          }
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("fulfilled"),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = "fulfilled";
          }
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("rejected"),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = "rejected";
          }
        }
      );
  },
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;
