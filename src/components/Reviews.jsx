import React from "react";
import SingleReview from "./SingleReview";
const Reviews = () => {
  return (
    <section>
      <h4>Sort by</h4>
      <button>All</button>
      <button>Newest</button>
      <button>Oldest</button>
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
