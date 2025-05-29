import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>Food Order</h3>
    </div>
  );
};
