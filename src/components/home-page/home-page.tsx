import { Link } from "react-router";
import style from "./home-page.module.css";
export const HomePage = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.overlay}>
          <h1 className={style.title}>Welcome to Food Order</h1>
          <Link to="/restaurants">
            <h2 className={style.subtitleLink}>Please select a restaurant</h2>
          </Link>
        </div>
      </div>
    </>
  );
};
