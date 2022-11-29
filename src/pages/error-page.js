import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Missing page!</h2>
      <p>
        <Link to="/">Go to the Dashboard</Link>
      </p>
    </div>
  );
}

export default ErrorPage;
