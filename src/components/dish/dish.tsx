import { Link } from "react-router";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./dish.module.css";
import classNames from "classnames";

type DishProps = {
  id: string;
  name: string;
  price: number;
};

export const Dish = ({ id, name, price }: DishProps) => {
  const { theme } = useThemeContext();
  return (
    <div className={classNames(style.container, style[theme])}>
      <Link to={`/dish/${id}`}>
        <div className={classNames(style.name, style[theme])}>{name}</div>
      </Link>
      <div className={classNames(style.price, style[theme])}>Price: {price} ₽</div>
    </div>
  );
};
