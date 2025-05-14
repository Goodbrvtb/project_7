import React from "react";
import { Menu } from "antd";
import {
  DoubleRightOutlined,
  FundProjectionScreenOutlined,
  HomeFilled
} from "@ant-design/icons";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import RoutesMap from "../../routes";
import "./style.css";
function MenuApp() {
  const navigate = useNavigate();
  return (
    <div className="custom-menu">
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            label: "React - это…",
            key: "reactStart",
            icon: <FundProjectionScreenOutlined></FundProjectionScreenOutlined>
          },
          {
            label: "С чего начать?",
            key: "reactInstall",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Компоненты",
            key: "components",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Props",
            key: "props",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "State",
            key: "state",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "LifeCycle",
            key: "lifeCycle",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Events",
            key: "events",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Refs",
            key: "refs",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Fragment",
            key: "fragment",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "Key",
            key: "key",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "ReactMemo",
            key: "reactMemo",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "UseMemo",
            key: "useMemo",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          },
          {
            label: "UseCallback",
            key: "useCallback",
            icon: <DoubleRightOutlined></DoubleRightOutlined>
          }
        ]}
      ></Menu>
      <RoutesMap />
    </div>
  );
}

export default MenuApp;
