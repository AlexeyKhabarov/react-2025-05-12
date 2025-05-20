// import { useState } from "react";
import type { TabsProps } from "../../types";
import { Tab } from "../tab/tab";

export const Tabs = ({ restaurants, onSelectRestaurant }: TabsProps) => {
  const handleSelectRestaurant = (id: string) => {
    onSelectRestaurant(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        width: "100%",
        padding: "8px 12px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        marginBottom: "20px",
        boxSizing: "border-box",
      }}
    >
      {restaurants.map(({ name, id }) => (
        <Tab key={id} name={name} id={id} onSelectRestaurant={handleSelectRestaurant} />
      ))}
    </div>
  );
};
