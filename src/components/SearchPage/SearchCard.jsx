import React from "react";
import {
  AccessTime,
  LanguageOutlined,
  Mail,
  BusinessCenterOutlined,
  Instagram,
  Event,
  LocationOnOutlined,
} from "@mui/icons-material";

const handleRedirect = () => {
  console.log("clicked");
  window.location.href = "/search/therapistName";
};

const SearchCard = () => {
  return (
    <section className="search-card" onClick={handleRedirect}>
      <section className="card-title">
        <div className="name-photo">
          <img src="" alt="" />
          <div>
            <h5>James Quaye</h5>
            <p>Psychotherapy</p>
          </div>
        </div>
        <div className="title-icons">
          <div>
            <Instagram />
          </div>
          <div>
            <LanguageOutlined />
          </div>
        </div>
      </section>
      <section className="card-hours">
        <AccessTime />
        Office hours: 8:00 - 19:00
      </section>

      <section className="card-details">
        <div className="detail">
          <div>
            <BusinessCenterOutlined />
            <span>Experience</span>
          </div>
          <p className="card-yrs">5 years </p>
        </div>
        <div className="detail">
          <div>
            <LocationOnOutlined />
            <span>Location</span>
          </div>
          <p className="card-yrs">Newtown, Accra</p>
        </div>
        <div className="detail">
          <div>
            <Event />
            <span>Availability</span>
          </div>
          <p className="card-yrs">Yes </p>
        </div>
      </section>
      <section className="contact">
        <button className="card-mail">
          <Mail />
        </button>
        <button className="call">Call now</button>
      </section>
    </section>
  );
};

export default SearchCard;
