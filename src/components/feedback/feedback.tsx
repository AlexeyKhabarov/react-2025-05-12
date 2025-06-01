import classNames from "classnames";
import { ReviewForm } from "../review-form/review-form";
import style from "./feedback.module.css";
import { useThemeContext } from "../hooks/useThemeContext";

export const Feedback = () => {
  const { theme } = useThemeContext();

  const restorantSubtitleClass = classNames({
    [style.restaurantSubtitleDark]: theme === "dark",
    [style.restaurantSubtitleLight]: theme === "light",
  });
  return (
    <div className={style.restaurantSection}>
      <h3 className={restorantSubtitleClass}>Leave feedback</h3>
      <ReviewForm />
    </div>
  );
};
