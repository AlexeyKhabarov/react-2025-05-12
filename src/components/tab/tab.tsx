import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./tab.module.css";

type TabProps = {
  name: string;
  id: string;
  onSelectRestaurant: (id: string) => void;
};

export const Tab = ({ name, id, onSelectRestaurant }: TabProps) => {
  const { theme } = useThemeContext();

  return (
    <button className={classNames(style.tab, style[theme])} onClick={() => onSelectRestaurant(id)}>
      {name}
    </button>
  );
};
