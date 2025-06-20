import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { getUsers } from "./get-users";
import { FULFILLED, PENDING, REJECTED } from "../../../constants/constants";
import type { User } from "../../../types/restaurants";

const usersAdapter = createEntityAdapter<User>();
type UsersState = ReturnType<typeof usersAdapter.getInitialState> & {
  requestStatus: "idle" | typeof PENDING | typeof FULFILLED | typeof REJECTED;
};

const initialState: UsersState = {
  ...usersAdapter.getInitialState({ requestStatus: "idle" }),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = PENDING;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        usersAdapter.setMany(state, payload);
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = REJECTED;
      });
  },
});

export const { selectIds: selectUsersIds, selectById: selectUserById } = usersAdapter.getSelectors<RootState>(
  (state) => state[usersSlice.name]
);

export const { selectRequestStatus } = usersSlice.selectors;
