import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <p>oh no...</p>
      <p>We can' seem to find the page you're looking for</p>
      <p>Error: 404</p>
      <Link to="/">Home</Link>
    </div>
  );
};
