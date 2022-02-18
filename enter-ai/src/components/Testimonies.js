import React, { useState } from "react";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "../store/testimonies";
import { IconButton, Slide } from "@mui/material";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import "./Testimonies.css";

const testimoniesLength = testimonies.length;

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(true);
  const [direction, setDirection] = useState("left");

  const handleRightClick = () => {
    if (direction !== "left") setDirection("left");

    setClicked(false);
    setTimeout(() => {
      setCurrentIndex(
        (testimoniesLength + currentIndex + 1) % testimoniesLength
      );
      setClicked(true);
    }, 200);
  };

  const handleLeftClick = () => {
    if (direction !== "right") setDirection("right");
    setClicked(false);
    setTimeout(() => {
      setCurrentIndex(
        (testimoniesLength + currentIndex - 1) % testimoniesLength
      );
      setClicked(true);
    }, 200);
  };

  return (
    <div className="testimonies">
      <div className="testimoniesHeader">What others say about us</div>
      <div className="top">
        <IconButton
          style={{ border: "1px solid #e0e0e0" }}
          onClick={handleLeftClick}
        >
          <ChevronLeftOutlinedIcon />
        </IconButton>
        <Slide direction={direction} in={clicked}>
          <div className="card">
            <TestimonyCard testimony={testimonies[currentIndex]} />
          </div>
        </Slide>
        <IconButton
          style={{ border: "1px solid #e0e0e0" }}
          onClick={handleRightClick}
        >
          <ChevronRightOutlinedIcon />
        </IconButton>
      </div>
      <div className="bottom">
        {testimonies.map((testimony, index) => (
          <div
            key={testimony.id}
            className={index === currentIndex ? "activeCardNo" : "cardNo"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
