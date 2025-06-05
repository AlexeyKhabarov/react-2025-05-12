import classNames from "classnames";
import { Button } from "../button/button";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./counter.module.css";

type CounterProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Counter = ({ count, onIncrement, onDecrement }: CounterProps) => {
  const { theme } = useThemeContext();

  return (
    <div className={style.counterControls}>
      <Button onClick={onDecrement} className={classNames(style.button, style[theme])} title="-" />
      <span className={classNames(style.count, style[theme])}>{count}</span>
      <Button onClick={onIncrement} className={classNames(style.button, style[theme])} title="+" />
    </div>
  );
};
