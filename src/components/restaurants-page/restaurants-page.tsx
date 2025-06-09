import { Tab } from "../tab/tab";
import style from "./restaurants-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { Outlet } from "react-router";

export const RestaurantsPage = () => {
  const { theme } = useThemeContext();
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <>
      <div className={style[theme]}>{restaurantIds.map((id) => (id ? <Tab key={id} id={id} /> : null))}</div>
      <Outlet />
    </>
  );
};
