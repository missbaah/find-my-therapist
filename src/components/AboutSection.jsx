import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AboutSection = () => {
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#3D7D57",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

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
            <div>
              <FacebookOutlinedIcon color="primary" fontSize="large" />
            </div>
            <div>
              <LanguageOutlinedIcon
                color="#8A8A8A"
                fontSize="large"
                sx={{
                  color: "#8A8A8A",
                }}
              />
            </div>
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
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
          </div>
        </div>
        <div className="office-hrs">
          <h5>Office hours</h5>
          <div className="hrs">
            <AccessTimeIcon />
            <p>9:00 - 17:00</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;
