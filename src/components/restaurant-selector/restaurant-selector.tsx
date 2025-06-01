import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { restaurants } from "../../../materials/mock";
import { Tab } from "../tab/tab";
import style from "./restaurant-selector.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import classNames from "classnames";

export const RestaurantSelector = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id || "");
  const selectedRestaurant = restaurants.find(({ id, name }) => id === selectedId && name);
  const { theme } = useThemeContext();

  const selectorClass = classNames({
    [style.restaurantSelectorDark]: theme === "dark",
    [style.restaurantSelectorLight]: theme === "light",
  });
  return (
    <>
      <div className={selectorClass}>
        {restaurants.map(({ name, id }) =>
          name ? <Tab key={id} name={name} id={id} onSelectRestaurant={(id) => setSelectedId(id)} /> : null
        )}
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
