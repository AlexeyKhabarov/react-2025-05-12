export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}
export interface ReviewItem {
  id: string;
  userId: string;
  text: string;
  rating: number;
}
export interface RestaurantItem {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: ReviewItem[];
}
export interface User {
  id: string;
  name: string;
}
