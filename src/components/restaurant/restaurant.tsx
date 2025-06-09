import style from "./restaurant.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";
import { Link, Outlet, useMatch } from "react-router";
type RestaurantProps = {
  name: string;
};
export const Restaurant = ({ name }: RestaurantProps) => {
  const { theme } = useThemeContext();
  const menuMatch = useMatch(":restaurantId/menu");
  const reviewsMatch = useMatch(":restaurantId/reviews");

  return (
    <div className={style.restaurant}>
      <h2 className={classNames(style.title, style[theme])}>{name}</h2>
      <nav>
        <div className={style.tabs}>
          <Link to="menu" className={classNames(style.tab, style[theme], menuMatch && style.active)}>
            Menu
          </Link>
          <Link to="reviews" className={classNames(style.tab, style[theme], reviewsMatch && style.active)}>
            Reviews
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
