import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/ProfileSetup.css";
import { Setup1, Setup2, Setup3, Setup4, Setup5 } from "../components";

const ProfileSetup = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState([]);
  const { profilesetup } = useParams();

  fetch(`https://find-therapist-api.onrender.com/auth/user/${profilesetup}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("API response:", data);
      setUser([...user, data]);
    })
    .catch((error) => {
      console.error("API error:", error);
    });

  function handleSubmit(e) {
    e.preventDefault();
    // get form data and submit it to server
    // redirect to profile page
    window.location.href = "/profiledashboard";
  }

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
    } else if (num == 4) {
      return <Setup5 />;
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
        <form className="setup-card" onSubmit={handleSubmit}>
          <div
            className="heading-content"
            style={{ display: num == 4 ? "none" : "block" }}
          >
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
            <div style={{ display: num == 4 ? "none" : "block" }}>
              <button onClick={handleNext} disabled={num > 4} className="login">
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
            </div>
            <button
              style={{
                display:
                  num == 0 || num == 1 || num == 2 || num == 3
                    ? "none"
                    : "block",
              }}
              type="submit"
              disabled={num < 1}
              className="login"
            >
              Check out profile
            </button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default ProfileSetup;
