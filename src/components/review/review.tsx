import classNames from "classnames";
import { UserContainer } from "../user/user-container";
import style from "./review.module.css";
import { useThemeContext } from "../hooks/useThemeContext";
type ReviewProps = {
  text: string;
  userId: string;
};
export const Review = ({ text, userId }: ReviewProps) => {
  const { theme } = useThemeContext();
  return (
    <div className={classNames(style.review, style[theme])}>
      <p className={classNames(style.text, style[theme])}>
        <UserContainer id={userId} />: {text}
      </p>
    </div>
  );
};
