import React from "react";
import logo from "../../../assets/RoadMap.jpg";
import HomeTitle from "../../homeTitle";
import "./style.css";
function Home() {
  return (
    <HomeTitle
      title={
        <div className="road-map">
          <img className="road-map-image" src={logo} alt="Road Map"></img>
        </div>
      }
    ></HomeTitle>
  );
}

export default Home;
