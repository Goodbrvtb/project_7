import React from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="not-found">
      <h1>404</h1>
      <h1>Pages not found</h1>
      <button onClick={handleHomeClick} type="home">
        Go home page
      </button>
    </div>
  );
}

export default NotFound;
