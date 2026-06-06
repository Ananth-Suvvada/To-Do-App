import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!input.trim()) return;
    let newTask = {
      text: input,
      completed: check,
      timeStamp: new Date().toLocaleString(),
    };
    setTodos([...todos, newTask]);
    setInput("");
    setCheck(false);
  };
  const deleteTask = (index) => {
    let todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };
  const handleToggle = (index) => {
    let todosCopy = [...todos];
    todosCopy[index].completed = !todosCopy[index].completed;
    setTodos(todosCopy);
  };
  return (
    <div className="to-do-container">
      <div className="to-do-head">
        <div className="title">TO-DO-APP</div>
        <div className="user-inputs">
          <input
            type="text"
            placeholder="ENTER YOUR TASK HERE..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={check}
              onChange={(e) => setCheck(e.target.checked)}
            />
            COMPLETED?
          </label>
          <button onClick={addTask}>ADD</button>
        </div>
      </div>
      <div className="to-do-body">
        <div className="to-do-list">
          {todos.map((todo, index) => (
            <div
              className={`to-do-item ${todo.completed ? "done" : "unDone"}`}
              key={index}
            >
              <div className="to-do-info">
                <h3>{todo.text}</h3>
                <p>{todo.timeStamp}</p>
              </div>
              <div className="to-do-btns">
                <button
                  className={` status-btn ${todo.completed ? "completed" : "in-completed"}`}
                  onClick={() => handleToggle(index)}
                >
                  {todo.completed ? "Done" : "UnDone"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
