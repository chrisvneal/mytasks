import React from "react";
import Links from "./Links";
import TaskList from "./TaskList";

function OldTasks(props) {
  return (
    <div>
      <Links />

      <h2>Old Tasks</h2>
      <TaskList
        tasks={[
          {
            key: 1,
            name: "get gifts",
          },
          {
            key: 2,
            name: "Order Amazon",
          },
        ]}
      />
    </div>
  );
}

export default OldTasks;
