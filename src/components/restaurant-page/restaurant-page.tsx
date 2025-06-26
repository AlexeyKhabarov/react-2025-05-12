import { useParams } from "react-router";
import { Restaurant } from "../restaurant/restaurant";
import { useGetRestaurantByIdQuery } from "../../redux/api";
import { Spinner } from "../spinner/spinner";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  if (!restaurantId) {
    return null;
  }
  const { data, isError, isLoading } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return "error";
  }

  if (!data) {
    return <div>No restaurant data</div>;
  }

  return (
    <>
      <div>
        <Restaurant name={data.name} />
      </div>
    </>
  );
};
