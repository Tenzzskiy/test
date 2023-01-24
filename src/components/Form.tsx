import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";
import { useState } from "react";
import { Button, Input } from "../baseComponents";
import { ListTypes } from "../types";

interface FormProps {
  setList: Dispatch<SetStateAction<ListTypes[]>>;
}
export const Form: FC<FormProps> = ({ setList }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    setList((prev) => [...prev, { name: inputValue }]);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Input value={inputValue} onChange={setInputValue} />
      <Button type="submit">Добавить задачу</Button>
    </form>
  );
};
