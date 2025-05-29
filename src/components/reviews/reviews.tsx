import type { ReviewItem } from "../../types/restaurants";
import style from "./reviews.module.css";
type ReviewProps = {
  reviews: ReviewItem[];
};
export const Reviews = ({ reviews }: ReviewProps) => {
  return reviews.length ? (
    <div className={style.restaurantSection}>
      <h3 className={style.restaurantSubtitle}>Reviews</h3>
      <div className={style.reviews}>
        {reviews.map(({ id, text }) =>
          text ? (
            <div key={id} className={style.review}>
              <p className={style.reviewText}>{text}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  ) : null;
};
