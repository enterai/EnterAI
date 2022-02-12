import React from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../store/courses";
import "./Courses.css";

const Courses = () => {
  return (
    <div className="coursePage">
      <div className="header">Available Courses</div>
      <div className="courses">
        {courses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
