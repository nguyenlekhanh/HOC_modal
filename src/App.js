import "./App.css";
import React from "react";
import HOCBaseTodoList from "./BaseTodoList.js";
import HOCBaseModal from "./BaseModal.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const TodoList = HOCBaseTodoList;
const BaseM = HOCBaseModal;

function App() {
  const data = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
  ];
  return (
    <div className="App">
      <TodoList data={data} />
      <BaseM data={data} />
    </div>
  );
}

export default App;
