import { Button } from "../button/button";
import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import "./reviewForm.css";

export const ReviewForm = () => {
  const { form, onNameChange, onTextChange, onDecrement, onIncrement, clear } = useForm();
  const { name, text, rating } = form;
  return (
    <form onSubmit={(event) => event.preventDefault()} className="form">
      <div>
        <span>Name</span>
        <input value={name} onChange={(event) => onNameChange(event.target.value)} />
      </div>
      <div>
        <span>Text</span>
        <textarea value={text} onChange={(event) => onTextChange(event.target.value)} />
      </div>
      <div>
        <span>Rating</span>
        <Counter count={rating} onDecrement={onDecrement} onIncrement={onIncrement} />
      </div>
      <Button title={"clear"} onClick={clear} className="button" />
    </form>
  );
};
