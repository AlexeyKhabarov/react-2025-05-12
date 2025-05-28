import type { RestaurantItem } from "../../types/restaurants";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../reviewForm/reviewForm";
import style from "./restaurant.module.css";

type RestaurantProps = {
  restaurant: RestaurantItem;
};

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className={style.restaurant}>
      <h2 className={style.restaurantTitle}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <div className={style.restaurantSection}>
        <h3 className={style.restaurantSubtitle}>Leave feedback</h3>
        <ReviewForm />
      </div>
    </div>
  );
};
