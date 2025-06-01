import { type PropsWithChildren } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProgressBar } from "../progress-bar/progress-bar";
import style from "./layout.module.css";
import classNames from "classnames";
import { useThemeContext } from "../hooks/useThemeContext";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useThemeContext();

  const layoutClass = classNames({
    [style.layoutDark]: theme === "dark",
    [style.layoutLight]: theme === "light",
  });
  return (
    <div className={layoutClass}>
      <ProgressBar />
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
