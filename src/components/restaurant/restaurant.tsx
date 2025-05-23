import type { RestaurantProps } from "../../types";
import { Dish } from "../dish/dish";
import { ReviewForm } from "../reviewForm/reviewForm";
import "./restaurant.css";

export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className="restaurant">
      <h2 className="restaurant__title">{name}</h2>
      {menu.length ? (
        <div className="restaurant__section">
          <h3 className="restaurant__subtitle">Menu</h3>
          <div className="menu">
            {menu.map((dish) => (dish.name && dish.price ? <Dish key={dish.id} dish={dish} /> : null))}
          </div>
        </div>
      ) : null}
      {reviews.length ? (
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
      ) : null}
      <div className="restaurant__section">
        <h3 className="restaurant__subtitle">Leave feedback</h3>
        <ReviewForm />
      </div>
    </div>
  );
};
