import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./counter.module.css";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  const { theme } = useThemeContext();
  const buttonClass = classNames({
    [style.counterButtonDark]: theme === "dark",
    [style.counterButtonLight]: theme === "light",
  });
  const countClass = classNames({
    [style.counterCountDark]: theme === "dark",
    [style.counterCountLight]: theme === "light",
  });
  return (
    <div className={style.counterControls}>
      <button onClick={onDecrement} className={buttonClass}>
        -
      </button>
      <span className={countClass}>{count}</span>
      <button onClick={onIncrement} className={buttonClass}>
        +
      </button>
    </div>
  );
};
