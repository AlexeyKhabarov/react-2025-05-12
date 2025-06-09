import { useSelector } from "react-redux";
import { selectCartWithDishNames } from "../../redux/entities/cart/slice";
import styles from "./cart.module.css";
import { CartItem } from "./cart-item";

export const Cart = () => {
  const cartItems = useSelector(selectCartWithDishNames);

  if (!cartItems.length) {
    return <div className={styles.empty}>The cart is empty</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your cart</h2>
      <ul className={styles.list}>
        {cartItems.map(({ id, amount, name }) => (
          <CartItem key={id} amount={amount} name={name} dishId={id} />
        ))}
      </ul>
    </div>
  );
};
