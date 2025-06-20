import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { FULFILLED, PENDING, REJECTED } from "../../../constants/constants";
type RequestState = Record<string, string>;
export const requestSlice = createSlice({
  name: "request",
  initialState: {} as RequestState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state, requestId) => state[requestId] || "idle",
    selectIsLoading: (state, requestId) => state[requestId] === PENDING,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith(PENDING),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = PENDING;
          }
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(FULFILLED),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = FULFILLED;
          }
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(REJECTED),
        (state, action: PayloadAction<unknown, string, { requestId: string }>) => {
          if (action.meta?.requestId) {
            state[action.meta.requestId] = REJECTED;
          }
        }
      );
  },
});

export const { selectRequestStatus, selectIsLoading } = requestSlice.selectors;
