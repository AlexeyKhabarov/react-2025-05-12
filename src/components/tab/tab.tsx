import type { TabProps } from "../../types";
import "./tab.css";
export const Tab = ({ name, id, onSelectRestaurant }: TabProps) => {
  return (
    <button className="tab" onClick={() => onSelectRestaurant(id)}>
      {name}
    </button>
  );
};
