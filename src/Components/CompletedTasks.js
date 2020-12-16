import React from "react";
import Links from "./Links";
import TaskList from "./TaskList";

function CompletedTasks(props) {
  return (
    <div className="completedTasks">
      <Links />

      <h2>Completed Tasks</h2>
      <TaskList tasks={props.tasks} />
    </div>
  );
}

export default CompletedTasks;
