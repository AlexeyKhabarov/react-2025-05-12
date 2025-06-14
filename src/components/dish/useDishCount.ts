import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectItemAmountById } from "../../redux/entities/cart/slice";
import { useCallback } from "react";
import type { RootState } from "../../redux/store";

export const useDishCount = (dishId: string) => {
  const amount = useSelector((state: RootState) => selectItemAmountById(state, dishId));
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(addToCart(dishId)), [dispatch, dishId]);
  const decrement = useCallback(() => dispatch(removeFromCart(dishId)), [dispatch, dishId]);
  return {
    count: amount,
    increment,
    decrement,
  };
};
