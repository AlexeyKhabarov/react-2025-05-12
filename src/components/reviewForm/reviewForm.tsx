import { Button } from "../button/button";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import style from "./reviewForm.module.css";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onDecrement, onIncrement, clear } = useForm();
  const { name, text, rating } = form;
  return (
    <form onSubmit={(event) => event.preventDefault()} className={style.form}>
      <div className={style.field}>
        <span className={style.label}>Name</span>
        <input className={style.input} value={name} onChange={(event) => onNameChange(event.target.value)} />
      </div>
      <div className={style.field}>
        <span className={style.label}>Text</span>
        <textarea className={style.textarea} value={text} onChange={(event) => onTextChange(event.target.value)} />
      </div>
      <div className={style.field}>
        <span className={style.label}>Rating</span>
        <Counter count={rating} onDecrement={onDecrement} onIncrement={onIncrement} />
      </div>
      <Button title={"clear"} onClick={clear} className={style.button} />
    </form>
  );
};
