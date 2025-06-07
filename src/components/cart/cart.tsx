import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  console.log("cartItems", cartItems);

  if (!cartItems.length) {
    return null;
  }
  return (
    <ul>
      {cartItems.map(({ id, amount }) => (
        <li key={id}>{`${id} - ${amount}`}</li>
      ))}
    </ul>
  );
};
