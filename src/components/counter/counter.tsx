import "./counter.css";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

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
