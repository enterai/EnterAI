import React from "react";
import Testimonies from "../components/Testimonies";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <div className="homeHeader">
          <div className="leftHeader">
            Enter AI - Learn With Fun On Any Schedule
          </div>
          <div className="rightHeader">
            <div className="title">The Best Learning Platform</div>
            <div className="content">
              The concept of traditional education has changed radically within
              the last couple of years. Being physically present in a classroom.
            </div>
          </div>
        </div>
        <div className="introVideo">
          <iframe
            width="600"
            height="330"
            src="https://www.youtube.com/embed/W4HEAxMPOrk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
      <Testimonies />
    </div>
  );
};

export default Home;
