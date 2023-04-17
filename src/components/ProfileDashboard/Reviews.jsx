import React, { useState } from "react";
import SingleReview from "./SingleReview";
const Reviews = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="reviews">
      <div className="sort-nav">
        <h4>Sort by</h4>
        <div className="sort-btns">
          <button className={active ? "sort-active" : ""}>All</button>
          <button>Newest</button>
          <button>Oldest</button>
        </div>
      </div>
      <SingleReview
        name="Emmanuel Acheampong"
        time="11 months ago"
        comments="Lorem ipsum dolor sit amet consectetur. Felis penatibus quis et dapibus pharetra. Nisl semper ac facilisi pellentesque auctor at tellus  ac facilisi pellentesque auctor at tellus "
      />
      <SingleReview
        name="Emmanuel Acheampong"
        time="11 months ago"
        comments="Lorem ipsum dolor sit amet consectetur. Felis penatibus quis et dapibus pharetra. Nisl semper ac facilisi pellentesque auctor at tellus  ac facilisi pellentesque auctor at tellus "
      />
      <SingleReview
        name="Emmanuel Acheampong"
        time="11 months ago"
        comments="Lorem ipsum dolor sit amet consectetur. Felis penatibus quis et dapibus pharetra. Nisl semper ac facilisi pellentesque auctor at tellus  ac facilisi pellentesque auctor at tellus "
      />
    </section>
  );
};

export default Reviews;
