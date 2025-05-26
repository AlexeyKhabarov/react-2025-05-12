import "./tab.css";
type TabProps = {
  name: string;
  id: string;
  onSelectRestaurant: (id: string) => void;
};

export const Tab = ({ name, id, onSelectRestaurant }: TabProps) => {
  return (
    <button className="tab" onClick={() => onSelectRestaurant(id)}>
      {name}
    </button>
  );
};
