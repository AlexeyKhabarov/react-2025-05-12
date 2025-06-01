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

  const tabClass = classNames({
    [style.tabDark]: theme === "dark",
    [style.tabLight]: theme === "light",
  });
  return (
    <button className={tabClass} onClick={() => onSelectRestaurant(id)}>
      {name}
    </button>
  );
};
