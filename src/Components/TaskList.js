import React from "react";
import { Link } from "react-router-dom";

function TaskList(props) {
  return (
    <div>
      <h2>Main Tasks</h2>
      <ul className="tasklist">
        {props.tasks.map((task) => (
          <li key={task.key} className="task">
            {task.name}
          </li>
        ))}
      </ul>

      <h3>Links</h3>
      <Link to="/">Home</Link>

      <Link to="/oldtasks">OldTasks</Link>
    </div>
  );
}

export default TaskList;
