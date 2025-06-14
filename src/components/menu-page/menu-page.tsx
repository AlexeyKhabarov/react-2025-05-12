import { DishContainer } from "../dish/dish-container";
import style from "./menu-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";

export const MenuPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId || ""));

  if (!restaurantId || !restaurant) {
    return null;
  }

  const { menu } = restaurant;

  if (!menu.length) {
    return null;
  }

  return menu.length ? (
    <div className={style.section}>
      <h3 className={style[theme]}>Menu</h3>
      <div className={style.menu}>{menu.map((id) => (id ? <DishContainer key={id} id={id} /> : null))}</div>
    </div>
  ) : null;
};
