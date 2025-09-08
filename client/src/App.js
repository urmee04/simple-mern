import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import TasksList from "./components/TaskList.js";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const getTasks = useCallback(() => {
    fetch(`${API_BASE}/api/tasks`)
      .then((res) => res.json())
      .then(setTasks);
  });

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = (event) => {
    event.preventDefault();

    fetch(`${API_BASE}/api/tasks/add`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTaskTitle }),
    }).then(() => {
      setNewTaskTitle("");
      getTasks();
    });
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>

      <TasksList tasks={tasks} updateTasks={getTasks} />

      <form onSubmit={clickAddTask}>
        <input
          type="text"
          size="30"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
        />
        <input className="btn-primary" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default App;
