import { useContext } from "react";
import { ThemeContext } from "../theme-context/theme-context-provider";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Context is null");
  }
  return context;
};
