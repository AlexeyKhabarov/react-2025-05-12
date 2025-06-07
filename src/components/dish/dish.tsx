import { Counter } from "../counter/counter";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./dish.module.css";
import { useDishCount } from "./useDishCount";
import { useAuthContext } from "../hooks/useAuthContext";
import classNames from "classnames";

type DishProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export const Dish = ({ id, name, price, ingredients }: DishProps) => {
  const { count, increment, decrement } = useDishCount(id);
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  return (
    <div className={classNames(style.container, style[theme])}>
      <div className={classNames(style.name, style[theme])}>{name}</div>
      <div className={classNames(style.price, style[theme])}>Цена: {price} ₽</div>
      <ul className={style.ingredients}>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className={classNames(style.ingredient, style[theme])}>
            {ingredient}
          </li>
        ))}
      </ul>
      {isAuthorized ? <Counter count={count} decrement={decrement} increment={increment} /> : null}
    </div>
  );
};
