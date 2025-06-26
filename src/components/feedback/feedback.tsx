import { ReviewForm } from "../review-form/review-form";
import style from "./feedback.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useAddReviewMutation } from "../../redux/api";
import { useParams } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";

export const Feedback = () => {
  const { theme } = useThemeContext();
  const { auth } = useAuthContext();
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }
  const [addReview, { isLoading }] = useAddReviewMutation();

  const handleAddReview = (form: { name: string; text: string; rating: number }) => {
    if (!auth.isAuthorized || !auth.userId) {
      return;
    }
    addReview({
      restaurantId,
      review: { text: form.text, rating: form.rating, userId: auth.userId },
    });
  };

  return (
    <div className={style.section}>
      <h3 className={style[theme]}>Feedback</h3>
      <ReviewForm onSubmitForm={handleAddReview} isSubmitButtonDisabled={isLoading} />
    </div>
  );
};
