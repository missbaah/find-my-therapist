import React from "react";

const SingleReview = ({ name, time, comments }) => {
  return (
    <section>
      <h5>{name}</h5>
      <p>{time}</p>
      <p>{comments}</p>
    </section>
  );
};

export default SingleReview;
