import { Button } from "../button/button";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import style from "./review-form.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onDecrement, onIncrement, clear } = useForm();
  const { name, text, rating } = form;
  const { theme } = useThemeContext();
  return (
    <form onSubmit={(event) => event.preventDefault()} className={classNames(style.form, style[theme])}>
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
        <Counter count={rating} onDecrement={onDecrement} onIncrement={onIncrement} />
      </div>
      <Button title={"clear"} onClick={clear} className={`${style.button} ${style[theme]}`} />
    </form>
  );
};
