import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "./dish";
import type { RootState } from "../../redux/store";

type DishContainerProps = {
  id: string;
};

export const DishContainer = ({ id }: DishContainerProps) => {
  const { name, price } = useSelector((state: RootState) => selectDishById(state, id));

  return <Dish id={id} name={name} price={price} />;
};
