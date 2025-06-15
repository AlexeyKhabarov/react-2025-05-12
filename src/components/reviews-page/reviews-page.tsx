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
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import { useRequest } from "../../redux/hooks/use-request";
import { Spinner } from "../spinner/spinner";
import { PENDING, REJECTED } from "../../constants/constants";

export const ReviewsPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId || ""));
  const reviewsRequestStatus = useRequest(getReviews, restaurantId);
  const usersRequestStatus = useRequest(getUsers);

  if (
    reviewsRequestStatus === "idle" ||
    reviewsRequestStatus === PENDING ||
    usersRequestStatus === "idle" ||
    usersRequestStatus === PENDING
  ) {
    return <Spinner />;
  }

  if (reviewsRequestStatus === REJECTED || usersRequestStatus === REJECTED) {
    return "error";
  }

  if (!restaurantId || !restaurant) {
    return null;
  }

  const { reviews } = restaurant;

  if (!reviews.length) {
    return null;
  }

  return reviews.length ? (
    <div className={style.section}>
      <h3 className={classNames(style.subtitle, style[theme])}>Reviews</h3>
      <div className={style.reviews}>
        {reviews.map((id) => (id ? <ReviewContainer id={id} key={id} /> : null))}
        {isAuthorized ? <Feedback /> : null}
      </div>
    </div>
  ) : null;
};
