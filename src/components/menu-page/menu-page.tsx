import { DishContainer } from "../dish/dish-container";
import style from "./menu-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";
import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { useRequest } from "../../redux/hooks/use-request";
import { Spinner } from "../spinner/spinner";
import { PENDING, REJECTED } from "../../constants/constants";

export const MenuPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId || ""));
  const requestStatus = useRequest(getDishes, restaurantId);

  if (requestStatus === "idle" || requestStatus === PENDING) {
    return <Spinner />;
  }

  if (requestStatus === REJECTED) {
    return "error";
  }

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
