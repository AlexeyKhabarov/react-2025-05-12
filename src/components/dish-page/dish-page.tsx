import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import type { RootState } from "../../redux/store";
import { Counter } from "../counter/counter";
import style from "./dish-page.module.css";
import { useDishCount } from "../dish/useDishCount";
import { useThemeContext } from "../hooks/useThemeContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useParams } from "react-router";

export const DishPage = () => {
  const { dishId } = useParams();
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  const dish = useSelector((state: RootState) => selectDishById(state, dishId || ""));
  const { count, increment, decrement } = useDishCount(dishId || "");

  if (!dishId || !dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

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
