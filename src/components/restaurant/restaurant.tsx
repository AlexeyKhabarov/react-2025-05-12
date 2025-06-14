import style from "./restaurant.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router";
type RestaurantProps = {
  name: string;
};
export const Restaurant = ({ name }: RestaurantProps) => {
  const { theme } = useThemeContext();

  return (
    <div className={style.restaurant}>
      <h2 className={classNames(style.title, style[theme])}>{name}</h2>
      <nav>
        <div className={style.tabs}>
          <NavLink
            to="menu"
            className={({ isActive }) => classNames(style.tab, style[theme], isActive && style.active)}
          >
            Menu
          </NavLink>
          <NavLink
            to="reviews"
            className={({ isActive }) => classNames(style.tab, style[theme], isActive && style.active)}
          >
            Reviews
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
