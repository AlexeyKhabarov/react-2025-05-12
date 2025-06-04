import type { RestaurantItem } from "../../types/restaurants";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import style from "./restaurant.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { Feedback } from "../feedback/feedback";
import { useAuthContext } from "../hooks/useAuthContext";

type RestaurantProps = {
  restaurant: RestaurantItem;
};

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;

  return (
    <div className={style.restaurant}>
      <h2 className={`${style.title} ${style[theme]}`}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      {isAuthorized ? <Feedback /> : null}
    </div>
  );
};
