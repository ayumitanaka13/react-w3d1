import React from "react";
import ToDoList from "./components/ToDoList";
import "./styles.css";
import { useSelector } from "react-redux";

function App() {
  const toDoList = useSelector((state) => state.toDoList);

  return (
    <div className="container">
      <h1 className="center blue-text">ToDo's ({toDoList.length})</h1>
      <ToDoList />
    </div>
  );
}

export default App;
