import classNames from "classnames";
import type { ReviewItem } from "../../types/restaurants";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./reviews.module.css";
type ReviewProps = {
  reviews: ReviewItem[];
};
export const Reviews = ({ reviews }: ReviewProps) => {
  const { theme } = useThemeContext();
  const subtitleClass = classNames({
    [style.restaurantSubtitleDark]: theme === "dark",
    [style.restaurantSubtitleLight]: theme === "light",
  });
  const reviewClass = classNames({
    [style.reviewDark]: theme === "dark",
    [style.reviewLight]: theme === "light",
  });
  const textClass = classNames({
    [style.reviewTextDark]: theme === "dark",
    [style.reviewTextLight]: theme === "light",
  });
  return reviews.length ? (
    <div className={style.restaurantSection}>
      <h3 className={subtitleClass}>Reviews</h3>
      <div className={style.reviews}>
        {reviews.map(({ id, text }) =>
          text ? (
            <div key={id} className={reviewClass}>
              <p className={textClass}>{text}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  ) : null;
};
