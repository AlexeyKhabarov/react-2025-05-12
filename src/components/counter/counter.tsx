import style from "./counter.module.css";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className={style.counterControls}>
      <button onClick={onDecrement} className={style.counterButton}>
        -
      </button>
      <span className={style.counterCount}>{count}</span>
      <button onClick={onIncrement} className={style.counterButton}>
        +
      </button>
    </div>
  );
};
