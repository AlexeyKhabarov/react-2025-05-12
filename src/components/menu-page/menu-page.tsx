import { DishContainer } from "../dish/dish-container";
import style from "./menu-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dishes/get-dishes";

export const MenuPage = () => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch<AppDispatch>();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId || ""));

  useEffect(() => {
    if (restaurantId) {
      dispatch(getDishes(restaurantId));
    }
  }, [restaurantId, dispatch]);

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
