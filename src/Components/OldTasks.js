import React from "react";
import { Link } from "react-router-dom";

function OldTasks() {
  return (
    <div>
      <h2>Old Tasks</h2>

      <h3>Links</h3>
      <Link to="/">Home</Link>
      <Link to="/oldtasks">Old Tasks</Link>
    </div>
  );
}

export default OldTasks;
