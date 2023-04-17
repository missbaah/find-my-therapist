import React from "react";

const SingleReview = ({ name, time, comments }) => {
  return (
    <section className="single-review">
      <div className="review-title">
        <h5>{name}</h5>
        <p className="dated">{time}</p>
      </div>
      <p className="comments">{comments}</p>
    </section>
  );
};

export default SingleReview;
