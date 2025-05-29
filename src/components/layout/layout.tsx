import { type PropsWithChildren } from "react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProgressBar } from "../progressBar/progressBar";
import style from "./layout.module.css";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.layout}>
      <ProgressBar />
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
