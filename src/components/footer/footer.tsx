import { useThemeContext } from "../hooks/useThemeContext";
import style from "./footer.module.css";
export const Footer = () => {
  const { theme } = useThemeContext();
  return (
    <div className={style.container}>
      <div className={style[theme]}>
        <p>© 2025 FoodOrder</p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};
