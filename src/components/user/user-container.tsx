import { useSelector } from "react-redux";
import { User } from "./user";
import { selectUserById } from "../../redux/entities/users/slice";
import type { RootState } from "../../redux/store";

type UserContainerProps = {
  id: string;
};

export const UserContainer = ({ id }: UserContainerProps) => {
  const user = useSelector((state: RootState) => selectUserById(state, id));
  const { name } = user;
  if (!name) {
    return null;
  }

  return <User name={name} />;
};
