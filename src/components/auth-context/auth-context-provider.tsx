import { useState, type PropsWithChildren, type Dispatch, type SetStateAction, createContext } from "react";

type AuthContextType = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [username, setUsername] = useState("");
  return <AuthContext value={{ username, setUsername }}>{children}</AuthContext>;
};
