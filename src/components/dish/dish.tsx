import classNames from "classnames";
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
  const { username } = useAuthContext();
  const dishClass = classNames({
    [style.dishDark]: theme === "dark",
    [style.dishLight]: theme === "light",
  });
  const dishNameClass = classNames({
    [style.dishNameDark]: theme === "dark",
    [style.dishNameLight]: theme === "light",
  });
  return (
    <div className={dishClass}>
      <div className={dishNameClass}>{dish.name}</div>
      {username ? <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} /> : null}
    </div>
  );
};
