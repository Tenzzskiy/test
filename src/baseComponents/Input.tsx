import React, { Dispatch, FC, SetStateAction } from "react";

interface InputProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}
export const Input: FC<InputProps> = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);
