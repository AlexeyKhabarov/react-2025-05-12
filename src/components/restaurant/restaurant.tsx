import type { RestaurantItem } from "../../types/restaurants";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { ReviewForm } from "../reviewForm/reviewForm";
import "./restaurant.css";

type RestaurantProps = {
  restaurant: RestaurantItem;
};

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className="restaurant">
      <h2 className="restaurant__title">{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <div className="restaurant__section">
        <h3 className="restaurant__subtitle">Leave feedback</h3>
        <ReviewForm />
      </div>
    </div>
  );
};
