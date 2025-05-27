export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
}
export interface ReviewItem {
  id: string;
  user: string;
  text: string;
  rating: number;
}
export interface RestaurantItem {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: ReviewItem[];
}
