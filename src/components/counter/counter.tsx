import classNames from "classnames";
import { Button } from "../button/button";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./counter.module.css";

type CounterProps = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter = ({ count, increment, decrement }: CounterProps) => {
  const { theme } = useThemeContext();

  return (
    <div className={style.counterControls}>
      <Button onClick={decrement} className={classNames(style.button, style[theme])} title="-" />
      <span className={classNames(style.count, style[theme])}>{count}</span>
      <Button onClick={increment} className={classNames(style.button, style[theme])} title="+" />
    </div>
  );
};
