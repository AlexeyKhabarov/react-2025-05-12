import styles from "./spinner.module.css";

export const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.loader} />
  </div>
);
