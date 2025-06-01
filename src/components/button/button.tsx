import type { MouseEventHandler } from "react";

export const Button = ({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};
