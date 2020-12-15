import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <h3>Links!</h3>
      <Link to="/">Home</Link>

      <Link to="/oldtasks">OldTasks</Link>
    </div>
  );
}

export default Links;
