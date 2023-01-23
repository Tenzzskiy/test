import React, { FC } from "react";

interface InputProps {
  name: string;
}
export const Input: FC<InputProps> = ({ name }) => <input name={name} />;
