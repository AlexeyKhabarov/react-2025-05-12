import type { MenuItem } from "../../types/restaurants";
import { Counter } from "../counter/counter";
import "./dish.css";
import { useDishCount } from "./useDishCount";

type DishProps = {
  dish: MenuItem;
};

export const Dish = ({ dish }: DishProps) => {
  const { count, onIncrement, onDecrement } = useDishCount();
  return (
    <div className="dish">
      <div className="dish-name">{dish.name}</div>
      <Counter count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
    </div>
  );
};
