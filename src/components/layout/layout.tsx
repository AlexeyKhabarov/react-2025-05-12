import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import type { PropsWithChildren } from "react";
import "./layout.css";
export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
