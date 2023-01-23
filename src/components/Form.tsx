import React, { Dispatch, FC, SetStateAction } from "react";
import { Button, Input } from "../baseComponents";

interface FormProps {
  setList: Dispatch<SetStateAction<string[]>>;
}
export const Form: FC<FormProps> = ({ setList }) => {

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const value = event.target[0].value;
    setList((prev) => [...prev, value]);
  };
  
  return (
    <form onSubmit={handleOnSubmit}>
      <Input name="text" />
      <Button type="submit">Добавить задачу</Button>
    </form>
  );
};
