import React from "react";
import Links from "./Links";
import Users from "./Users";

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
      <Users />
    </div>
  );
}

export default TaskList;
