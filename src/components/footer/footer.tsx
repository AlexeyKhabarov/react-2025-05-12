import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./footer.module.css";
export const Footer = () => {
  const { theme } = useThemeContext();
  const copyrightClass = classNames({
    [style.copyrightLight]: theme === "light",
    [style.copyrightDark]: theme === "dark",
  });
  return (
    <div className={style.footerContainer}>
      <div className={copyrightClass}>
        <p>© 2025 FoodOrder</p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};
