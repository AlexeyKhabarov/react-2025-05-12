import classNames from "classnames";
import style from "./reviews-page.module.css";
import { ReviewContainer } from "../review/review-container";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";
import { useAuthContext } from "../hooks/useAuthContext";
import { Feedback } from "../feedback/feedback";

export const ReviewsPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  if (!restaurantId) {
    return null;
  }
  const { reviews } = useSelector((state: RootState) => selectRestaurantById(state, restaurantId));

  if (!reviews.length) {
    return null;
  }

  return reviews.length ? (
    <div className={style.section}>
      <h3 className={classNames(style.subtitle, style[theme])}>Reviews</h3>
      <div className={style.reviews}>{reviews.map((id) => (id ? <ReviewContainer id={id} key={id} /> : null))}</div>
      {isAuthorized ? <Feedback /> : null}
    </div>
  ) : null;
};
