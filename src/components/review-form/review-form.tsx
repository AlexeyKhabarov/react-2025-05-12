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
  const formClass = classNames({
    [style.formDark]: theme === "dark",
    [style.formLight]: theme === "light",
  });
  const labelClass = classNames({
    [style.labelDark]: theme === "dark",
    [style.labelLight]: theme === "light",
  });
  const inputClass = classNames({
    [style.inputDark]: theme === "dark",
    [style.inputLight]: theme === "light",
  });
  const buttonClass = classNames({
    [style.buttonDark]: theme === "dark",
    [style.buttonLight]: theme === "light",
  });
  return (
    <form onSubmit={(event) => event.preventDefault()} className={formClass}>
      <div className={style.field}>
        <span className={labelClass}>Name</span>
        <input className={inputClass} value={name} onChange={(event) => onNameChange(event.target.value)} />
      </div>
      <div className={style.field}>
        <span className={labelClass}>Text</span>
        <textarea className={inputClass} value={text} onChange={(event) => onTextChange(event.target.value)} />
      </div>
      <div className={style.field}>
        <span className={labelClass}>Rating</span>
        <Counter count={rating} onDecrement={onDecrement} onIncrement={onIncrement} />
      </div>
      <Button title={"clear"} onClick={clear} className={buttonClass} />
    </form>
  );
};
