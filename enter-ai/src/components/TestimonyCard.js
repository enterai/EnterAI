import React from "react";
import "./TestimonyCard.css";

const TestimonyCard = (props) => {
  const { testimony } = props;
  const { content, author, authorHeadline } = testimony;
  return (
    <div className="testimonyCard">
      <div className="testimony">{content}</div>
      <div className="testimonyDivider"></div>
      <div className="testimonyFooter">
        <div className="testimonyAuthor">{author}</div>
        <div className="testimonyFooter2">{authorHeadline}</div>
      </div>
    </div>
  );
};

export default TestimonyCard;
