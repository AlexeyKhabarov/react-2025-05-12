import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRequestStatus, selectUsersIds } from "./slice";
import type { User } from "../../../types/normalized-restaurants";
import type { RootState } from "../../store";

export const getUsers = createAsyncThunk<User[], void, { state: RootState }>(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      const result = await response.json();
      if (!result.length) {
        return rejectWithValue("Users not found");
      }
      return result;
    } catch (error) {
      return rejectWithValue((error as Error).message || "Error");
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return selectUsersIds(state).length === 0 || selectRequestStatus(state) === "idle";
    },
  }
);
