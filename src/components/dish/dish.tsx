import type { MenuItem } from "../../types/restaurants";
import { Counter } from "../counter/counter";
import style from "./dish.module.css";
import { useDishCount } from "./useDishCount";

type DishProps = {
  dish: MenuItem;
};

export const Dish = ({ dish }: DishProps) => {
  const { count, onIncrement, onDecrement } = useDishCount();
  return (
    <div className={style.dish}>
      <div className={style.dishName}>{dish.name}</div>
      <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
    </div>
  );
};
