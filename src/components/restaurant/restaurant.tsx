import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import style from "./restaurant.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { Feedback } from "../feedback/feedback";
import { useAuthContext } from "../hooks/useAuthContext";
import classNames from "classnames";
type RestaurantProps = {
  name: string;
  menu: string[];
  reviews: string[];
};
export const Restaurant = ({ name, menu, reviews }: RestaurantProps) => {
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;

  return (
    <div className={style.restaurant}>
      <h2 className={classNames(style.title, style[theme])}>{name}</h2>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      {isAuthorized ? <Feedback /> : null}
    </div>
  );
};
