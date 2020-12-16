import React from "react";
import TaskList from "./TaskList";
import Header from "./Header";
import NewTaskForm from "./NewTaskForm";

function Home(props) {
  return (
    <div className="Home">
      <Header />

      <NewTaskForm />

      <div className="container">
        <h2>New Tasks</h2>
        <TaskList tasks={props.tasks} />
      </div>
    </div>
  );
}

export default Home;
