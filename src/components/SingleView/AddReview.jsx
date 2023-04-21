import React, { useState } from "react";
import SingleReview from "../ProfileDashboard/SingleReview.jsx";
import "../../assets/ProfileDashboard.css";

const AddReview = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="reviews">
      <form className="review-form">
        <p>Leave a review ❤️</p>
        <label>
          <input placeholder="Please enter your full name" />
        </label>
        <label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Share your detailed experience"
          ></textarea>
        </label>
        <button type="submit">Post</button>
      </form>
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

export default AddReview;
