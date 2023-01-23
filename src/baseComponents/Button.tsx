import React, { FC, ReactNode, memo } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
export const Button: FC<ButtonProps> = memo(({ children, type }) => {
  return <button type={type}>{children}</button>;
});
