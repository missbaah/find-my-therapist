import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/ProfileSetup.css";
import { Setup1, Setup2, Setup3, Setup4 } from "../components";

const ProfileSetup = () => {
  const [num, setNum] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setNum(num + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setNum(num - 1);
  };

  const SetupTitle = [
    "Personal Details",
    "Work Details",
    "Location",
    "Social links",
  ];

  const SetupBody = () => {
    if (num == 0) {
      return <Setup1 />;
    } else if (num == 1) {
      return <Setup2 />;
    } else if (num == 2) {
      return <Setup3 />;
    } else if (num == 3) {
      return <Setup4 />;
    }
  };

  const disabled = () => {
    if (num < 0) {
      return true;
    }
  };

  return (
    <main>
      <nav className="profile-nav">
        <Link className="profile-logo" to="/">
          LOGO
        </Link>
        <div>
          <img src="" alt="" />
          <p className="name">Grace Ashley</p>
        </div>
      </nav>
      <section className="profile-body">
        <section className="setup-card">
          <div className="heading">
            <p className="step">Step {num + 1}</p>
            <div className="progress">
              <div
                className="setup-progress"
                style={{ background: num == 0 ? "#3d7d57" : "#3d7d57" }}
              ></div>
              <div
                className="setup-progress"
                style={{
                  background: num == 0 ? "#D9D9D9" : "#3d7d57",
                }}
              ></div>
              <div
                className="setup-progress"
                style={{
                  background: num == 0 || num == 1 ? "#D9D9D9" : "#3d7d57",
                }}
              ></div>
              <div
                className="setup-progress"
                style={{
                  background:
                    num == 0 || num == 1 || num == 2 ? "#D9D9D9" : "#3d7d57",
                }}
              ></div>
            </div>
            <h3>{SetupTitle[num]}</h3>
          </div>
          <section className="body">
            {SetupBody()}
            <button onClick={handleNext} disabled={num > 2} className="login">
              Next
            </button>
            <button
              style={{ display: num == 0 ? "none" : "block" }}
              onClick={handleBack}
              disabled={num < 1}
              className="back-btn"
            >
              Back
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProfileSetup;
