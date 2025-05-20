import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount((count) => (count < 5 ? count + 1 : count));
  const onDecrement = () => setCount((count) => (count > 0 ? count - 1 : count));
  return {
    count,
    onIncrement,
    onDecrement,
  };
};
