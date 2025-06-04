import type { ReviewItem } from "../../types/restaurants";
import { useThemeContext } from "../hooks/useThemeContext";
import style from "./reviews.module.css";
type ReviewProps = {
  reviews: ReviewItem[];
};
export const Reviews = ({ reviews }: ReviewProps) => {
  const { theme } = useThemeContext();
  return reviews.length ? (
    <div className={style.section}>
      <h3 className={`${style.subtitle} ${style[theme]}`}>Reviews</h3>
      <div className={style.reviews}>
        {reviews.map(({ id, text }) =>
          text ? (
            <div key={id} className={`${style.review} ${style[theme]}`}>
              <p className={`${style.text} ${style[theme]}`}>{text}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  ) : null;
};
