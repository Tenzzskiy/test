import React, { FC, memo } from "react";
import { ListItem } from "../baseComponents/ListItem";
import { ListItemProps } from "../types";

interface ListProps {
  list: ListItemProps[];
  handleDelete: (id: number) => void;
  handleReduct: (id: number, newText: string) => void;
}
export const List: FC<ListProps> = memo(
  ({ list, handleDelete, handleReduct }) => (
    <>
      {list.map((element, index) => (
        <ListItem
          handleReduct={handleReduct}
          key={index}
          text={element.name}
          id={index}
          handleDelete={handleDelete}
        />
      ))}
    </>
  )
);
