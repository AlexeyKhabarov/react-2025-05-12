import { useState } from "react";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { Tab } from "../tab/tab";
import style from "./restaurant-page.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";

export const RestaurantPage = () => {
  const { theme } = useThemeContext();
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantIds[0]);

  const handleSetActiveRestaurantId = (id: string) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  };

  return (
    <>
      <div className={style[theme]}>
        {restaurantIds.map((id) =>
          id ? <Tab key={id} id={id} onSelectRestaurant={() => handleSetActiveRestaurantId(id)} /> : null
        )}
      </div>
      <div>
        {activeRestaurantId ? (
          <RestaurantContainer id={activeRestaurantId} key={activeRestaurantId} />
        ) : (
          <p>Ресторан не выбран</p>
        )}
      </div>
    </>
  );
};
