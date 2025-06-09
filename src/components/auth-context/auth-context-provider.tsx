import { useState, type PropsWithChildren, createContext } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/entities/cart/slice";

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
  const dispatch = useDispatch();
  const toggleAuth = () => {
    setAuth((prev) => {
      if (prev.isAuthorized) {
        dispatch(clearCart());
        return { isAuthorized: false };
      } else {
        return { isAuthorized: true, name: "User" };
      }
    });
  };
  return <AuthContext value={{ auth, toggleAuth }}>{children}</AuthContext>;
};
