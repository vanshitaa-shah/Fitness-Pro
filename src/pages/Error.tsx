import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>404 Page Not Found!!</h1>
      <p> The requested page could not be found.</p>

      <Button type="primary">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

export default Error;
