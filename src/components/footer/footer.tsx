import style from "./footer.module.css";
export const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.copyright}>
        <p>© 2025 FoodOrder</p>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  );
};
