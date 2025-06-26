import type { MouseEventHandler } from "react";

export const Button = ({
  title,
  onClick,
  className,
  disabled,
}: {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {title}
    </button>
  );
};
