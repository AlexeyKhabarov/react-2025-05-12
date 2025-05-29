import type { MenuItem } from "../../types/restaurants";
import { Dish } from "../dish/dish";
import style from "./menu.module.css";
type MenuProps = {
  menu: MenuItem[];
};
export const Menu = ({ menu }: MenuProps) => {
  return menu.length ? (
    <div className={style.restaurantSection}>
      <h3 className={style.restaurantSubtitle}>Menu</h3>
      <div className={style.menu}>
        {menu.map((dish) => (dish.name && dish.price ? <Dish key={dish.id} dish={dish} /> : null))}
      </div>
    </div>
  ) : null;
};
