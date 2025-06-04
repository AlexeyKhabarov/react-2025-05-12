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
  console.log("theme", theme);

  return (
    <div className={style.counterControls}>
      <Button onClick={onDecrement} className={`${style.button} ${style[theme]}`} title="-" />
      <span className={`${style.count} ${style[theme]}`}>{count}</span>
      <Button onClick={onIncrement} className={`${style.button} ${style[theme]}`} title="+" />
    </div>
  );
};
