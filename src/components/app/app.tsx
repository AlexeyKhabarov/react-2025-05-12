import { Layout } from "../layout/layout";
import { Restaurants } from "../restaurants/restaurants";
import { Tabs } from "../tabs/tabs";
import { restaurants } from "../../../materials/mock";
import { useState } from "react";

export const App = () => {
  const [selectedId, setSelectedId] = useState(restaurants[0]?.id || "");

  return (
    <Layout>
      <Tabs restaurants={restaurants} onSelectRestaurant={setSelectedId} />
      <Restaurants restaurants={restaurants} selectedId={selectedId} />
    </Layout>
  );
};
