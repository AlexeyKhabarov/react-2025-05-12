import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";
import type { User } from "../../../types/normalized-restaurants";

type UsersState = {
  ids: string[];
  entities: Record<string, User>;
};
const initialState: UsersState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce<Record<string, User>>((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state: UsersState, id: string) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
