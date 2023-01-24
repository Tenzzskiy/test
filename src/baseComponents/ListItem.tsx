import React, { FC, memo, useState } from "react";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";

interface ListItemProps {
  text: string;
  id: number;
  checked: boolean;
  handleDelete: (id: number) => void;
  handleReduct: (id: number, newText: string) => void;
}
export const ListItem: FC<ListItemProps> = memo(
  ({ text, id, handleDelete, handleReduct, checked }) => {
    const [isReduct, setIsReduct] = useState(false);
    const [inputValue, setInputValue] = useState(text);
    const [isChecked, setIsChecked] = useState(checked);

    const containerStyles = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      gap: "20px",
    };

    const deleteStyles = {
      padding: "5px 10px",
      background: "black",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const onReductClick = () => {
      if (isReduct) {
        handleReduct(id, inputValue);
      }
      setIsReduct((prev) => !prev);
    };

    const onDeleteClick = () => {
      setIsReduct(false);
      handleDelete(id);
    };

    return (
      <div style={containerStyles}>
        <button onClick={onReductClick} style={deleteStyles}>
          {isReduct ? "Сохранить" : "Редактировать"}
        </button>
        <Checkbox onChange={setIsChecked} />

        {isReduct ? (
          <Input value={inputValue} onChange={setInputValue} />
        ) : (
          <div>{text}</div>
        )}
        
        <button onClick={onDeleteClick} style={deleteStyles}>
          Удалить
        </button>

        {isChecked ? (
          <span style={{ color: "green" }}>- Выполнено</span>
        ) : (
          <span style={{ color: "red" }}>- Не выполнено</span>
        )}
        
      </div>
    );
  }
);
