import { useSelector } from "react-redux";
import { Username } from "./user";
import { useMemo } from "react";
import { api } from "../../redux/api";
import type { User } from "../../types/restaurants";

type UserContainerProps = {
  id: string;
};

export const UserContainer = ({ id }: UserContainerProps) => {
  const users = useSelector(api.endpoints.getUsers.select())?.data;

  const user = useMemo(() => {
    return users?.find((user: User) => user.id === id);
  }, [users, id]);
  if (!user) {
    return null;
  }
  const { name } = user;
  return <Username name={name} />;
};
