import React from "react";
import { Button } from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./CourseCard.css";

const CourseCard = (props) => {
  const { course } = props;
  const {
    // courseId,
    courseTitle,
    courseAuthor,
    courseImg,
    difficulty,
    rating,
    noOfEnrolledStudents,
    coursePrice,
  } = course;

  return (
    <div className="courseCard">
      <img
        src={
          courseImg
            ? courseImg
            : "https://cdni.iconscout.com/illustration/premium/thumb/training-courses-4572217-3793668.png"
        }
        alt="course"
      />
      <div className="courseDetails">
        <div className="courseTitle">{courseTitle}</div>
        <div className="courseAuthor">By {courseAuthor}</div>
        <div className="moreDetails">
          <div>
            <div className="icon">
              <BusinessCenterOutlinedIcon fontSize="small" />
            </div>
            {difficulty}
          </div>
          <div>
            <div className="icon">
              <PeopleOutlinedIcon fontSize="small" />
            </div>
            {noOfEnrolledStudents}
          </div>
          <div>
            <div className="icon">
              <StarOutlinedIcon fontSize="small" style={{ color: "#feab22" }} />
            </div>
            {rating}
          </div>
        </div>
      </div>
      <div className="priceSection">
        <div className="price">&#8377;{coursePrice}</div>
        <Button
          size="small"
          style={{ textTransform: "none", color: "#0057ff" }}
        >
          <ShoppingCartOutlinedIcon fontSize="small" />
          &nbsp; Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
