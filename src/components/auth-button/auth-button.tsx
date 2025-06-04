import { Button } from "../button/button";
import { useAuthContext } from "../hooks/useAuthContext";
import style from "../auth-button/auth-button.module.css";

export const AuthButton = () => {
  const { auth, toggleAuth } = useAuthContext();
  const { isAuthorized, name } = auth;

  return (
    <div className={style.actions}>
      {isAuthorized ? (
        <div className={style.authButtons}>
          {name ? <Button title={name} className={style.button} /> : null}
          <Button title="Sign out" onClick={toggleAuth} className={style.button} />
        </div>
      ) : (
        <Button title="Sign in" onClick={toggleAuth} className={style.button} />
      )}
    </div>
  );
};
