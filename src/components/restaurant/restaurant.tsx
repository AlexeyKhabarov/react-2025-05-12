import type { RestaurantProps } from "../../types";
import { Dish } from "../dish/dish";
import "./restaurant.css";
export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div className="restaurant">
      <h2 className="restaurant__title">{name}</h2>
      {menu.length ? (
        <div className="restaurant__section">
          <h3 className="restaurant__subtitle">Меню</h3>
          <div className="menu">
            {menu.map((dish) => (dish.name && dish.price ? <Dish key={dish.id} dish={dish} /> : null))}
          </div>
        </div>
      ) : null}
      {reviews.length ? (
        <div className="restaurant__section">
          <h3 className="restaurant__subtitle">Отзывы</h3>
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
    </div>
  );
};
