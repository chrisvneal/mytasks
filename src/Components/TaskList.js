import React from "react";

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
    </div>
  );
}

export default TaskList;
