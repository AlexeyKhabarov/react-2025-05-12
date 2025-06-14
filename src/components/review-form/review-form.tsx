import { Button } from "../button/button";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import style from "./review-form.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/entities/reviews/post-review";
import { useParams } from "react-router";
import { patchReview } from "../../redux/entities/reviews/patch-review";
import type { AppDispatch } from "../../redux/store";

export const ReviewForm = ({ reviewId }: { reviewId?: string }) => {
  const { theme } = useThemeContext();
  const { restaurantId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { form, onNameChange, onTextChange, onDecrement, onIncrement, clear } = useForm();
  const { name, text, rating } = form;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!restaurantId) return;

    if (reviewId) {
      dispatch(
        patchReview({
          reviewId,
          review: {
            text,
            rating,
            userId: name,
          },
        })
      );
    } else {
      dispatch(
        postReview({
          restaurantId,
          review: {
            text,
            rating,
            userId: name,
          },
        })
      );
    }

    clear();
  };
  return (
    <form onSubmit={handleSubmit} className={classNames(style.form, style[theme])}>
      <div className={style.field}>
        <span className={classNames(style.label, style[theme])}>Name</span>
        <input
          className={classNames(style.input, style[theme])}
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
        />
      </div>
      <div className={style.field}>
        <span className={classNames(style.label, style[theme])}>Text</span>
        <textarea
          className={classNames(style.textarea, style[theme])}
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
        />
      </div>
      <div className={style.field}>
        <span className={classNames(style.label, style[theme])}>Rating</span>
        <Counter count={rating} decrement={onDecrement} increment={onIncrement} />
      </div>
      <Button title={"clear"} onClick={clear} className={`${style.button} ${style[theme]}`} />
    </form>
  );
};
