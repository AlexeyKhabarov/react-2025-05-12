type UserProps = {
  name: string;
};
export const Username = ({ name }: UserProps) => {
  return <span>{name}</span>;
};
