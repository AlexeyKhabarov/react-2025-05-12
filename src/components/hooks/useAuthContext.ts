import { useContext } from "react";
import { AuthContext } from "../auth-context/auth-context-provider";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context is null");
  }
  return context;
};
