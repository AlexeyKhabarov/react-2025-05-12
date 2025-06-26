import classNames from "classnames";
import style from "./reviews-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useParams } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import { Feedback } from "../feedback/feedback";
import { Spinner } from "../spinner/spinner";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/api";
import { Review } from "../review/review";

export const ReviewsPage = () => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const { auth } = useAuthContext();
  const { isAuthorized } = auth;
  if (!restaurantId) {
    return null;
  }
  const reviewsById = useGetReviewsByRestaurantIdQuery(restaurantId);
  const users = useGetUsersQuery();
  if (reviewsById.isFetching || users.isLoading) {
    return <Spinner />;
  }

  if (reviewsById.isError || users.isError) {
    return "error";
  }

  if (!reviewsById.data?.length || !users.data?.length) {
    return <div>No reviews</div>;
  }

  return (
    <div className={style.section}>
      <h3 className={classNames(style.subtitle, style[theme])}>Reviews</h3>
      <div className={style.reviews}>
        {reviewsById.data.map(({ id, text, userId }) => (
          <Review text={text} userId={userId} key={id} />
        ))}
        {isAuthorized ? <Feedback /> : null}
      </div>
    </div>
  );
};
