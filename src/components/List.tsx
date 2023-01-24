import React, { FC } from "react";
import { ListItem } from "../baseComponents/ListItem";

interface ListProps {
  list: string[];
  handleDelete: (id: number) => void;
  handleReduct: (id: number, newText: string) => void;
}
export const List: FC<ListProps> = ({ list, handleDelete, handleReduct }) => (
  <div>
    {list.map((element, index) => (
      <ListItem
        handleReduct={handleReduct}
        key={index}
        text={element}
        id={index}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);
