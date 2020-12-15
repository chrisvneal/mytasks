import React from "react";
import Links from "./Links";

function TaskList(props) {
  return (
    <div>
      <ul className="tasklist">
        {props.tasks.map((task) => (
          <li key={task.key} className="task">
            {task.name}
          </li>
        ))}
      </ul>

      <Links />
    </div>
  );
}

export default TaskList;
