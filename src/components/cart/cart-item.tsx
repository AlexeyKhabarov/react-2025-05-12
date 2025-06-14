import { Counter } from "../counter/counter";
import { useDishCount } from "../dish/useDishCount";
import styles from "./cart.module.css";

type CartItemProps = {
  dishId: string;
  amount: number;
  name: string;
};
export const CartItem = ({ dishId, amount, name }: CartItemProps) => {
  const { increment, decrement } = useDishCount(dishId);
  return (
    <li className={styles.item}>
      <span className={styles.itemId}>{name}</span>
      <Counter count={amount} increment={increment} decrement={decrement} />
    </li>
  );
};
