import React, { FC } from "react";
import { ListItem } from "../baseComponents/ListItem";

interface ListProps {
  list: string[];
  handleDelete: (id: number) => void;
}
export const List: FC<ListProps> = ({ list, handleDelete }) => (
  <div>
    {list.map((element, index) => (
      <ListItem
        key={index}
        text={element}
        id={index}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);
