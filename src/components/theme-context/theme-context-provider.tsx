import { useState, type PropsWithChildren, type Dispatch, type SetStateAction, createContext } from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
