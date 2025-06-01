import type { RestaurantItem } from "../../types/restaurants";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import style from "./restaurant.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";
import { Feedback } from "../feedback/feedback";
import { useAuthContext } from "../hooks/useAuthContext";

type RestaurantProps = {
  restaurant: RestaurantItem;
};

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  const { theme } = useThemeContext();
  const { username } = useAuthContext();
  const restorantTitleClass = classNames({
    [style.restaurantTitleDark]: theme === "dark",
    [style.restaurantTitleLight]: theme === "light",
  });
  return (
    <div className={style.restaurant}>
      <h2 className={restorantTitleClass}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      {username ? <Feedback /> : null}
    </div>
  );
};
