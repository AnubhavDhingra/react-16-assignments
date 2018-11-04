import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <h1 className="error">404 - Page not found</h1>
      <p>The requested resource could not be found.</p>
    </div>
  );
};

export default NotFound;
