import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { restaurants } from "../../../materials/mock";
import { Tab } from "../tab/tab";
import "./restaurantSelector.css";
export const RestaurantSelector = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id || "");
  const selectedRestaurant = restaurants.find(({ id }) => id === selectedId);
  return (
    <>
      <div className="restaurantSelector">
        {restaurants.map(({ name, id }) => (
          <Tab key={id} name={name} id={id} onSelectRestaurant={(id) => setSelectedId(id)} />
        ))}
      </div>
      <div>
        {selectedRestaurant ? (
          <Restaurant restaurant={selectedRestaurant} key={selectedRestaurant.id} />
        ) : (
          <p>Ресторан не найден</p>
        )}
      </div>
    </>
  );
};
