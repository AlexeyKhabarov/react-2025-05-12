import classNames from "classnames";
import { Counter } from "../counter/counter";
import style from "./dish-page.module.css";
import { useDishCount } from "../dish/useDishCount";
import { useThemeContext } from "../hooks/useThemeContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router";
import { Spinner } from "../spinner/spinner";
import { useGetDishByIdQuery } from "../../redux/api";

export const DishPage = () => {
  const { dishId } = useParams();
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  if (!dishId) {
    return null;
  }
  const { count, increment, decrement } = useDishCount(dishId || "");
  const { data, isError, isLoading } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return <div>No dish data</div>;
  }

  const { name, price, ingredients } = data;

  return (
    <div className={classNames(style.container, style[theme])}>
      <div className={style.card}>
        <div className={style.info}>
          <h2 className={classNames(style.name, style[theme])}>{name}</h2>
          <p className={classNames(style.price, style[theme])}>Price: {price} ₽</p>

          <h3>Ingredients:</h3>
          <ul className={style.ingredientList}>
            {ingredients.map((ingredient) => (
              <li key={ingredient} className={classNames(style.ingredient, style[theme])}>
                {ingredient}
              </li>
            ))}
          </ul>

          {isAuthorized && (
            <div className={style.counterWrapper}>
              <Counter count={count} increment={increment} decrement={decrement} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
