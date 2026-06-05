import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [time, setTime] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setInput(input);
    setTime(new Date().toLocaleString());
    setInput("");
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
              value={check}
              onChange={() => setCheck(!check)}
            />
            COMPLETED?
          </label>
          <button onClick={addTask}>ADD</button>
        </div>
      </div>
      <div className="to-do-body">
        <div className="to-do-list" id="to-do-list">
          <div className="to-do-item">
            <div className="to-do-info">
              <h3>{input}</h3>
              <p>{time}</p>
            </div>
            <div className="to-do-btns">
              <button className="status-btn">UnDone</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
