import { ReviewForm } from "../review-form/review-form";
import style from "./feedback.module.css";
import { useThemeContext } from "../hooks/useThemeContext";

export const Feedback = () => {
  const { theme } = useThemeContext();

  return (
    <div className={style.section}>
      <h3 className={style[theme]}>Leave feedback</h3>
      <ReviewForm />
    </div>
  );
};
