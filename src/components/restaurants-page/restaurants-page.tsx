import style from "./restaurants-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { Outlet } from "react-router";
import { Spinner } from "../spinner/spinner";
import { useGetRestaurantsQuery } from "../../redux/api";
import classNames from "classnames";
import { Link } from "react-router";

export const RestaurantsPage = () => {
  const { theme } = useThemeContext();

  const { data, isError, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "error";
  }

  if (!data || !data.length) {
    return <div>No restaurants found</div>;
  }

  return (
    <>
      <div className={style[theme]}>
        {data.map((restaurant) => (
          <Link to={restaurant.id} key={restaurant.id} className={classNames(style.tab, style[theme])}>
            {restaurant.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};
