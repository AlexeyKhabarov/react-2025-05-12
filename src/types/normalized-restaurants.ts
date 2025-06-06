export type RestaurantItem = {
  id: string;
  name: string;
  menu: string[];
  reviews: string[];
};

export type Dish = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export type Review = {
  id: string;
  userId: string;
  text: string;
  rating: number;
};

export type User = {
  id: string;
  name: string;
};
