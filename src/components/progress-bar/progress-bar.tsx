import { useEffect, useState } from "react";
import styles from "./progress-bar.module.css";

export const ProgressBar = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight <= 0) return;
      const progress = (scrollY / documentHeight) * 100;
      setProgressWidth(progress);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className={styles.progress} style={{ width: `${progressWidth}%` }}></div>;
};
