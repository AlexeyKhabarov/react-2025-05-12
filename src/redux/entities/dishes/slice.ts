import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock";
import type { Dish } from "../../../types/normalized-restaurants";

type DishesState = {
  ids: string[];
  entities: Record<string, Dish>;
};

const initialState: DishesState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {} as Record<string, Dish>),
};

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState,
  reducers: {},
  selectors: {
    selectDishById: (state: DishesState, id: string) => state.entities[id],
  },
});

export const { selectDishById } = dishesSlice.selectors;
