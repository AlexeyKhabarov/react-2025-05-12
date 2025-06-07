import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import type { RootState } from "../../redux/store";
import { Restaurant } from "./restaurant";
import { useSelector } from "react-redux";

type RestaurantContainerProps = {
  id: string;
};
export const RestaurantContainer = ({ id }: RestaurantContainerProps) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
