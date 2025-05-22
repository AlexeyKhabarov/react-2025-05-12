import { useState } from "react";
import { MAX_COUNT, MIN_COUNT } from "../../constants/constants";
export const useCount = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount((count) => (count < MAX_COUNT ? count + 1 : count));
  const onDecrement = () => setCount((count) => (count > MIN_COUNT ? count - 1 : count));
  return {
    count,
    onIncrement,
    onDecrement,
  };
};
