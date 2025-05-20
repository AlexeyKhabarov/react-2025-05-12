import type { Restaurant } from ".";

export type TabProps = {
  name: string;
  id: string;
  onSelectRestaurant: (id: string) => void;
};
export type TabsProps = {
  restaurants: Restaurant[];
  onSelectRestaurant: (id: string) => void;
};
