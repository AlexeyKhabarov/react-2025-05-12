import classNames from "classnames";
import type { MenuItem } from "../../types/restaurants";
import { Dish } from "../dish/dish";
import style from "./menu.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
type MenuProps = {
  menu: MenuItem[];
};
export const Menu = ({ menu }: MenuProps) => {
  const { theme } = useThemeContext();
  const menuClass = classNames({
    [style.restaurantSubtitleDark]: theme === "dark",
    [style.restaurantSubtitleLight]: theme === "light",
  });

  return menu.length ? (
    <div className={style.restaurantSection}>
      <h3 className={menuClass}>Menu</h3>
      <div className={style.menu}>
        {menu.map((dish) => (dish.name && dish.price ? <Dish key={dish.id} dish={dish} /> : null))}
      </div>
    </div>
  ) : null;
};
