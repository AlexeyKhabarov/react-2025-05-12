import type { DishProps } from "../../types";
import { Counter } from "../counter/counter";
import "./dish.css";
export const Dish = ({ dish }: DishProps) => {
  return (
    <div className="dish">
      <div className="dish-name">{dish.name}</div>
      <Counter />
    </div>
  );
};
