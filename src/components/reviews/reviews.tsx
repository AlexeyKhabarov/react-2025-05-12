import type { ReviewItem } from "../../types/restaurants";
import "./reviews.css";
type ReviewProps = {
  reviews: ReviewItem[];
};
export const Reviews = ({ reviews }: ReviewProps) => {
  return reviews.length ? (
    <div className="restaurant__section">
      <h3 className="restaurant__subtitle">Reviews</h3>
      <div className="reviews">
        {reviews.map(({ id, text }) =>
          text ? (
            <div key={id} className="review">
              <p className="review__text">{text}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  ) : null;
};
