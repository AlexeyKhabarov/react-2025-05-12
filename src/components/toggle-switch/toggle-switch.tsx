import styles from "./toogle-switch.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
export const ToggleSwitch = () => {
  const { setTheme } = useThemeContext();
  const handleChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={handleChange} className={styles.input} />
      <span className={styles.slider} />
    </label>
  );
};
