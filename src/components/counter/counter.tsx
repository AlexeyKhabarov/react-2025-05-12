import { useCount } from "./useCount";
import "./counter.css";
export const Counter = () => {
  const { count, onIncrement, onDecrement } = useCount();
  return (
    <div className="counter-control">
      <button onClick={onDecrement} className="counter-button">
        -
      </button>
      <span className="counter-count">{count}</span>
      <button onClick={onIncrement} className="counter-button">
        +
      </button>
    </div>
  );
};
