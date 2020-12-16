import React from "react";
import Header from "./Header";
import TaskList from "./TaskList";

function CompletedTasks(props) {
  return (
    <div className="completedTasks">
      <Header />

      <div className="container">
        <h2>Completed Tasks</h2>
        <TaskList tasks={props.tasks} />
      </div>
    </div>
  );
}

export default CompletedTasks;
