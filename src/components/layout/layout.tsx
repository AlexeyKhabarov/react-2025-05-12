import { type PropsWithChildren } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProgressBar } from "../progress-bar/progress-bar";
import style from "./layout.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { Cart } from "../cart/cart";
import { Outlet } from "react-router";

export const Layout: React.FC<PropsWithChildren> = () => {
  const { theme } = useThemeContext();
  return (
    <div className={style[theme]}>
      <ProgressBar />
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Cart />
      <Footer />
    </div>
  );
};
