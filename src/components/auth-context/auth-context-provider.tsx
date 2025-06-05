import { useState, type PropsWithChildren, createContext } from "react";

type AuthState = {
  isAuthorized: boolean;
  name?: string;
};

type AuthContextType = {
  auth: AuthState;
  toggleAuth: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({ isAuthorized: false });
  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized ? { isAuthorized: false } : { isAuthorized: true, name: "User" };
    });
  };
  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
