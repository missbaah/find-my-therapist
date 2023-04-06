import React from "react";
import { Icon, SvgIcon } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AboutSection = () => {
  return (
    <section className="about-bio">
      <section className="bio-1">
        <h5>Bio</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur. Felis penatibus quis et
          dapibus pharetra. Nisl semper ac facilisi pellentesque auctor at
          tellus etiam duis. Quis donec tortor pulvinar pharetra consectetur
          praesent. Ut molestie fermentum phasellus enim diam nisl.
        </p>
      </section>
      <section className="bio-2">
        <div className="exp">
          <h5>Experience</h5>
          <p>10 years 1 month</p>
        </div>
        <div className="links">
          <h5>Social Links</h5>
          <div className="icons">
            <FacebookOutlinedIcon color="primary" />
            <LanguageOutlinedIcon color="#8A8A8A" />
          </div>
        </div>
        <div className="mail">
          <h5>Email</h5>
          <div>
            <AttachEmailOutlinedIcon />
            <p>example191@gmail.com</p>
          </div>
        </div>
      </section>
      <section className="bio-3">
        <div className="location-availability">
          <div className="location">
            <h5>Location</h5>
            <div className="location-name">
              <LocationOnOutlinedIcon />
              <p>Newtown, Accra</p>
            </div>
          </div>
          <div className="availability">
            <h5>Availability</h5>
          </div>
        </div>
        <div className="office-hrs">
          <h5>Office hours</h5>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
