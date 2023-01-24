import React, { Dispatch, FC, SetStateAction, memo } from "react";

interface InputProps {
  onChange: Dispatch<SetStateAction<boolean>>;
}
export const Checkbox: FC<InputProps> = memo(({ onChange }) => (
  <input type="checkbox" onChange={(e) => onChange(e.currentTarget.checked)} />
));
