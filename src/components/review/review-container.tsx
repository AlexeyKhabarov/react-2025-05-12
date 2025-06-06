import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import type { RootState } from "../../redux/store";

type ReviewContainerProps = {
  id: string;
};

export const ReviewContainer = ({ id }: ReviewContainerProps) => {
  const review = useSelector((state: RootState) => selectReviewById(state, id));
  const { text, userId } = review;
  if (!review?.text) {
    return null;
  }

  return <Review text={text} userId={userId} />;
};
