import { useReducer } from "react";
import { MAX_RATING_COUNT, MIN_RATING_COUNT } from "../../constants/constants";
interface ReviewFormState {
  name: string;
  text: string;
  rating: number;
}

type Action =
  | { type: "set name"; payload: string }
  | { type: "set text"; payload: string }
  | { type: "increment rating" }
  | { type: "decrement rating" }
  | { type: "clear" };

const initialState: ReviewFormState = {
  name: "",
  text: "",
  rating: 0,
};
const SET_NAME_ACTION = "set name";
const SET_TEXT_ACTION = "set text";
const INCREMENT_RATING_ACTION = "increment rating";
const DECREMENT_RATING_ACTION = "decrement rating";
const CLEAR_FORM_ACTION = "clear";

const reducer = (state: ReviewFormState, action: Action): ReviewFormState => {
  switch (action.type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: action.payload,
      };
    case INCREMENT_RATING_ACTION:
      return {
        ...state,
        rating: state.rating < MAX_RATING_COUNT ? state.rating + 1 : state.rating,
      };
    case DECREMENT_RATING_ACTION:
      return {
        ...state,
        rating: state.rating > MIN_RATING_COUNT ? state.rating - 1 : state.rating,
      };
    case CLEAR_FORM_ACTION:
      return initialState;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const onNameChange = (name: string) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };
  const onTextChange = (text: string) => {
    dispatch({ type: SET_TEXT_ACTION, payload: text });
  };
  const onIncrement = () => {
    dispatch({ type: INCREMENT_RATING_ACTION });
  };
  const onDecrement = () => {
    dispatch({ type: DECREMENT_RATING_ACTION });
  };
  const clear = () => {
    dispatch({ type: CLEAR_FORM_ACTION });
  };
  return {
    form,
    onNameChange,
    onTextChange,
    onIncrement,
    onDecrement,
    clear,
  };
};
