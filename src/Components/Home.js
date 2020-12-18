import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";

function Home(props) {
  return (
    <div className="Home">
      <Header />

      <div className="container">
        <h2>New Tasks</h2>
        <TaskList tasks={props.tasks} />
      </div>
    </div>
  );
}

export default Home;
