import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./tab.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";
import { Link } from "react-router";

type TabProps = {
  id: string;
};

export const Tab = ({ id }: TabProps) => {
  const { theme } = useThemeContext();

  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <Link to={id} className={classNames(style.tab, style[theme])}>
      {name}
    </Link>
  );
};
