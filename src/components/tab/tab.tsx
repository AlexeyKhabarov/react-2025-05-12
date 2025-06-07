import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./tab.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";

type TabProps = {
  id: string;
  onSelectRestaurant: (id: string) => void;
};

export const Tab = ({ id, onSelectRestaurant }: TabProps) => {
  const { theme } = useThemeContext();

  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id)) || {};

  const { name } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <button className={classNames(style.tab, style[theme])} onClick={() => onSelectRestaurant(id)}>
      {name}
    </button>
  );
};
