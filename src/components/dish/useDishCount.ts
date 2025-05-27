import { useState } from "react";
import { MAX_DISH_COUNT, MIN_DISH_COUNT } from "../../constants/constants";
export const useDishCount = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount((count) => (count < MAX_DISH_COUNT ? count + 1 : count));
  const onDecrement = () => setCount((count) => (count > MIN_DISH_COUNT ? count - 1 : count));
  return {
    count,
    onIncrement,
    onDecrement,
  };
};
