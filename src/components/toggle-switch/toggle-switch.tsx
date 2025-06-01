import type { ChangeEventHandler } from "react";
import styles from "./toogle-switch.module.css";
export const ToggleSwitch = ({ onChange }: { onChange: ChangeEventHandler<HTMLInputElement> }) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onChange} className={styles.input} />
      <span className={styles.slider} />
    </label>
  );
};
