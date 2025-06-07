import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";
import type { RestaurantItem } from "../../../types/normalized-restaurants";

type RestaurantsState = {
  ids: string[];
  entities: Record<string, RestaurantItem>;
};
const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce<Record<string, RestaurantItem>>((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
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
