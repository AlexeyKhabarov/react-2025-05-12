import type { MenuItem } from "../../types/restaurants";
import { Dish } from "../dish/dish";
import "./menu.css";
type MenuProps = {
  menu: MenuItem[];
};
export const Menu = ({ menu }: MenuProps) => {
  return menu.length ? (
    <div className="restaurant__section">
      <h3 className="restaurant__subtitle">Menu</h3>
      <div className="menu">
        {menu.map((dish) => (dish.name && dish.price ? <Dish key={dish.id} dish={dish} /> : null))}
      </div>
    </div>
  ) : null;
};
