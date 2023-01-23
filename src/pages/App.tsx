import React, { useState } from "react";
import { Form, List } from "../components";

function App() {
  const [list, setList] = useState<string[]>([]);

  const handleDelete = (id: number) => {
    setList((prev) => prev.filter((element, index) => index !== id));
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
      <List list={list} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
