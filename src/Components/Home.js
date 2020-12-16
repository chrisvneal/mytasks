import React from "react";
import TaskList from "./TaskList";
import Links from "./Links";

function Home(props) {
  return (
    <div>
      <Links />
      <h2>New Tasks</h2>
      <TaskList tasks={props.tasks} />
    </div>
  );
}

export default Home;
