import React, { FC, memo } from "react";
import { ListItem } from "../baseComponents/ListItem";
import { ListTypes } from "../types";

interface ListProps {
  list: ListTypes[];
  handleDelete: (id: number) => void;
  handleReduct: (id: number, newText: string) => void;
}
export const List: FC<ListProps> = memo(
  ({ list, handleDelete, handleReduct }) => (
    <div>
      {list.map((element, index) => (
        <ListItem
          handleReduct={handleReduct}
          key={index}
          text={element.name}
          checked={element.done}
          id={index}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
);
