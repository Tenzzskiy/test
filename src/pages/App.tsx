import React, { useState } from "react";
import { Form, List } from "../components";

function App() {
  const [list, setList] = useState<string[]>([]);

  const handleDelete = (id: number) => {
    setList((prev) => prev.filter((element, index) => index !== id));
  };
  const handleReduct = (id: number, newText: string) => {
    setList((prev) =>
      prev.map((element, index) => (index === id ? newText : element))
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Form setList={setList} />
      <List
        list={list}
        handleDelete={handleDelete}
        handleReduct={handleReduct}
      />
    </div>
  );
}

export default App;
