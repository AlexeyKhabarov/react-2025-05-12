import { DishContainer } from "../dish/dish-container";
import style from "./menu.module.css";
import { useThemeContext } from "../hooks/useThemeContext";

type MenuProps = {
  menu: string[];
};
export const Menu = ({ menu }: MenuProps) => {
  const { theme } = useThemeContext();
  return menu.length ? (
    <div className={style.section}>
      <h3 className={style[theme]}>Menu</h3>
      <div className={style.menu}>{menu.map((id) => (id ? <DishContainer key={id} id={id} /> : null))}</div>
    </div>
  ) : null;
};
