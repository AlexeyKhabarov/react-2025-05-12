import "./counter.css";
import type { CounterProps } from "../../types";

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
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
