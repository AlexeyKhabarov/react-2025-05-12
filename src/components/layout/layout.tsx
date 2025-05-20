import { Header } from "../header/header";
import { Footer } from "../footer/footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
