import type { MenuItem } from "../../types/restaurants";
import { Counter } from "../counter/counter";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./dish.module.css";
import { useDishCount } from "./useDishCount";
import { useAuthContext } from "../hooks/useAuthContext";

type DishProps = {
  dish: MenuItem;
};

export const Dish = ({ dish }: DishProps) => {
  const { count, onIncrement, onDecrement } = useDishCount();
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={`${style.name} ${style[theme]}`}>{dish.name}</div>
      {isAuthorized ? <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} /> : null}
    </div>
  );
};
