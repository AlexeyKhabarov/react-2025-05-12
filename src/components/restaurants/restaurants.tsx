import type { RestaurantsProps } from "../../types";
import { Restaurant } from "../restaurant/restaurant";

export const Restaurants = ({ restaurants, selectedId }: RestaurantsProps) => {
  const selectedRestaurant = restaurants.find((r) => r.id === selectedId);
  return (
    <div>
      {selectedRestaurant ? (
        <Restaurant restaurant={selectedRestaurant} key={selectedRestaurant.id} />
      ) : (
        <p>Ресторан не найден</p>
      )}
    </div>
  );
};
