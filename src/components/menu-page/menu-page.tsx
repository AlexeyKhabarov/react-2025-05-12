import style from "./menu-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { Spinner } from "../spinner/spinner";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api";
import { Dish } from "../dish/dish";

export const MenuPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }
  const { data, isError, isLoading } = useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "error";
  }

  if (!data?.length) {
    return <div>No menu</div>;
  }

  return (
    <div className={style.section}>
      <h3 className={style[theme]}>Menu</h3>
      <div className={style.menu}>
        {data.map(({ id, name, price }) => (
          <Dish id={id} name={name} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};
