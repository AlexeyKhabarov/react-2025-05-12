import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import type { RootState } from "../../redux/store";

type ReviewContainerProps = {
  id: string;
};

export const ReviewContainer = ({ id }: ReviewContainerProps) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  if (!review) {
    return null;
  }
  const { text, userId } = review;

  return <Review text={text} userId={userId} />;
};
