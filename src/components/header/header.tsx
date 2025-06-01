import style from "./header.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
import { ToggleSwitch } from "../toggle-switch/toggle-switch";
import { useAuthContext } from "../hooks/useAuthContext";
import { Button } from "../button/button";
import { USER } from "../../../materials/mock";

export const Header = () => {
  const { setTheme } = useThemeContext();
  const { username, setUsername } = useAuthContext();

  const handleChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const handleSignInClick = () => {
    setUsername((prev) => (prev !== USER ? USER : ""));
  };
  const handleSignOutClick = () => {
    setUsername("");
  };
  return (
    <div className={style.header}>
      <div className={style.titleContainer}>
        <h3 className={style.title}>Food Order</h3>
      </div>
      <div className={style.actions}>
        {username ? (
          <div className={style.authButtons}>
            <Button title={username} />
            <Button title="Sign out" onClick={handleSignOutClick} />
          </div>
        ) : (
          <Button title="Sign in" onClick={handleSignInClick} />
        )}

        <ToggleSwitch onChange={handleChange} />
      </div>
    </div>
  );
};
