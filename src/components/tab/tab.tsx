import type { TabProps } from "../../types";

export const Tab = ({ name, id, onSelectRestaurant }: TabProps) => {
  return (
    <button
      role="button"
      style={{
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "10px 16px",
        fontSize: "14px",
        fontWeight: 500,
        color: "#333",
        backgroundColor: "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease",
        flex: "1 1 150px",
        minWidth: "120px",
        boxSizing: "border-box",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        outline: "none",
      }}
      onClick={() => onSelectRestaurant(id)}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#f0f0f0";
        e.currentTarget.style.borderColor = "#ccc";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#fff";
        e.currentTarget.style.borderColor = "#ddd";
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "#007bff";
        e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,123,255,0.2)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = "#ddd";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {name}
    </button>
  );
};
