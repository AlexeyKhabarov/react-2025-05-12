import style from "./header.module.css";
import { ToggleSwitch } from "../toggle-switch/toggle-switch";
import { AuthButton } from "../auth-button/auth-button";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.titleContainer}>
        <h3 className={style.title}>Food Order</h3>
      </div>
      <div className={style.actions}>
        <AuthButton />
        <ToggleSwitch />
      </div>
    </div>
  );
};
