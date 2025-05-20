import type { DishProps } from "../../types";
import { useCount } from "./useCount";

export const Dish = ({ dish }: DishProps) => {
  const { count, onIncrement, onDecrement } = useCount();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        border: "1px solid #eee",
        marginBottom: "8px",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f8f8f8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fff";
      }}
    >
      {/* Левая колонка — название блюда */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#333",
        }}
      >
        {dish.name}
      </div>

      {/* Правая колонка — кнопки и количество */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          onClick={onDecrement}
          style={{
            padding: "4px 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#f9f9f9",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#eee";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
          }}
        >
          -
        </button>
        <span
          style={{
            minWidth: "20px",
            textAlign: "center",
            fontWeight: "500",
            color: "#555",
          }}
        >
          {count}
        </span>
        <button
          onClick={onIncrement}
          style={{
            padding: "4px 8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: "#f9f9f9",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#eee";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#f9f9f9";
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
