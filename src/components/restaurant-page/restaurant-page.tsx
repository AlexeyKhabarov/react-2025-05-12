import { useParams } from "react-router";
import { RestaurantContainer } from "../restaurant/restaurant-container";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }
  return (
    <div>
      <RestaurantContainer id={restaurantId} />
    </div>
  );
};
