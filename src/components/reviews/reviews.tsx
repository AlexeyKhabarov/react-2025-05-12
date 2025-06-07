import classNames from "classnames";
import style from "./reviews.module.css";
import { ReviewContainer } from "../review/review-container";
import { useThemeContext } from "../hooks/useThemeContext";
type ReviewProps = {
  reviews: string[];
};
export const Reviews = ({ reviews }: ReviewProps) => {
  const { theme } = useThemeContext();
  return reviews.length ? (
    <div className={style.section}>
      <h3 className={classNames(style.subtitle, style[theme])}>Reviews</h3>
      <div className={style.reviews}>{reviews.map((id) => (id ? <ReviewContainer id={id} key={id} /> : null))}</div>
    </div>
  ) : null;
};
