import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <Link to="/">New Tasks</Link>

      <Link to="/completed">Completed Tasks</Link>
    </div>
  );
}

export default Links;
