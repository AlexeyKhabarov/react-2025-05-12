import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MenuItem, RestaurantItem, ReviewItem, User } from "../../types/restaurants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query<RestaurantItem[], void>({ query: () => "/restaurants" }),
    getRestaurantById: builder.query<RestaurantItem, string>({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getDishesByRestaurantId: builder.query<MenuItem[], string>({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishById: builder.query<MenuItem, string>({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query<ReviewItem[], string>({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "Reviews", id: "all" }],
    }),
    getUsers: builder.query<User[], void>({
      query: () => `/users`,
    }),
    addReview: builder.mutation<void, { restaurantId: string; review: ReviewItem }>({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useLazyGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useLazyGetRestaurantByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useLazyGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useLazyGetDishByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useLazyGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useAddReviewMutation,
} = api;
