type UserProps = {
  name: string;
};
export const User = ({ name }: UserProps) => {
  return <span>{name}</span>;
};
