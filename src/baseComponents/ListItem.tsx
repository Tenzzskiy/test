import React, { FC, memo } from "react";

interface ListItemProps {
  text: string;
  id: number;
  handleDelete: (id: number) => void;
}
export const ListItem: FC<ListItemProps> = memo(
  ({ text, id, handleDelete }) => {
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

    return (
      <div style={containerStyles}>
        <div>{text}</div>
        <button onClick={() => handleDelete(id)} style={deleteStyles}>
          Удалить
        </button>
      </div>
    );
  }
);
