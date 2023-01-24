import React, { FC, memo, useState } from "react";
import { Input } from "./Input";

interface ListItemProps {
  text: string;
  id: number;
  handleDelete: (id: number) => void;
  handleReduct: (id: number, newText: string) => void;
}
export const ListItem: FC<ListItemProps> = memo(
  ({ text, id, handleDelete, handleReduct }) => {
    const [isReduct, setIsReduct] = useState(false);
    const [inputValue, setInputValue] = useState(text);

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

    return (
      <div style={containerStyles}>
        <button onClick={onReductClick} style={deleteStyles}>
          {isReduct ? "Сохранить" : "Редактировать"}
        </button>
        {isReduct ? (
          <Input value={inputValue} onChange={setInputValue} />
        ) : (
          <div>{text}</div>
        )}
        <button onClick={() => handleDelete(id)} style={deleteStyles}>
          Удалить
        </button>
      </div>
    );
  }
);
