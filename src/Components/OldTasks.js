import React from "react";
import Links from "./Links";
import TaskList from "./TaskList";

function OldTasks(props) {
  return (
    <div>
      <h2>Old Tasks</h2>
      <TaskList
        tasks={[
          {
            key: 1,
            name: "get gifts",
          },
        ]}
      />

      <Links />
    </div>
  );
}

export default OldTasks;
