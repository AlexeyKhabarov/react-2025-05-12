import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";
import type { RestaurantItem } from "../../../types/normalized-restaurants";

type RestaurantsState = {
  ids: string[];
  entities: Record<string, RestaurantItem>;
};
const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {} as Record<string, RestaurantItem>),
};

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantIds: (state: RestaurantsState) => state.ids,
    selectRestaurantById: (state: RestaurantsState, id: string) => state.entities[id],
  },
});

export const { selectRestaurantIds, selectRestaurantById } = restaurantsSlice.selectors;
