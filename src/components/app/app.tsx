import { Layout } from "../layout/layout";
import { RestaurantSelector } from "../restaurantSelector/restaurantSelector";
import "./app.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantSelector />
    </Layout>
  );
};
