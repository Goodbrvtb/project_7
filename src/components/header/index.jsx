import React from "react";
import { Button, Flex } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";
function Header() {
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <Button onClick={handleHomeClick} type="home">
        <HomeFilled></HomeFilled> Home
      </Button>
      <div className="label">
        <h1>Основы по React</h1>
      </div>
    </div>
  );
}

export default Header;
