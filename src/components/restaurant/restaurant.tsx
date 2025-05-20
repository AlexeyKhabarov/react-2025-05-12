import type { RestaurantProps } from "../../types";
import { Dish } from "../dish/dish";
export const Restaurant = ({ restaurant }: RestaurantProps) => {
  const { name, menu, reviews } = restaurant;
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          color: "#333",
          borderBottom: "2px solid #f0f0f0",
          paddingBottom: "8px",
          marginBottom: "20px",
        }}
      >
        {name}
      </h2>

      <div style={{ marginBottom: "30px" }}>
        <h3
          style={{
            color: "#555",
            fontSize: "1.2em",
            marginBottom: "10px",
            backgroundColor: "#f8f8f8",
            padding: "8px 12px",
            borderRadius: "4px",
          }}
        >
          Меню
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {menu.map((dish) => (
            <Dish key={dish.id} dish={dish} />
          ))}
        </div>
      </div>

      <div>
        <h3
          style={{
            color: "#555",
            fontSize: "1.2em",
            marginBottom: "10px",
            backgroundColor: "#f8f8f8",
            padding: "8px 12px",
            borderRadius: "4px",
          }}
        >
          Отзывы
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {reviews.map(({ id, text }) => (
            <div
              key={id}
              style={{
                padding: "12px",
                borderLeft: "4px solid #007bff",
                backgroundColor: "#f9f9f9",
                borderRadius: "4px",
              }}
            >
              <p style={{ margin: 0, color: "#333" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
