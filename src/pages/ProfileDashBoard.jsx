import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profpic from "../images/pic.png";
import coverpic from "../images/CoverPhoto.png";
import "../assets/ProfileDashBoard.css";

const ProfileDashBoard = () => {
  const [style, setStyle] = useState(false);

  const handleClick = (e) => {
    const link = e.target;
    if (link) {
      setStyle(true);
    }
  };
  return (
    <main>
      {" "}
      <nav className="profile-nav">
        <Link className="profile-logo" to="/">
          LOGO
        </Link>
        <div>
          <img src="" alt="" />
          <p className="name">Grace Ashley</p>
        </div>
      </nav>
      <div className="coverpic">
        <img src={coverpic} id="coverpic" alt="coverpic" />
      </div>
      <section className="dashboard-body">
        <section className="person-info">
          <div className="sub-1">
            <img src={profpic} alt="profilepic" />
            <div className="sub-2">
              <h3>Grace Antwi</h3>
              <div className="person-title">
                <p className="ash">Psychotherapy, LCSW </p>
                <p className="green">She/Her</p>
              </div>
            </div>
          </div>
          <button className="edit-btn">Edit Profile</button>
        </section>
        <div className="person-bio">
          <Link
            to="aboutsection"
            onClick={handleClick}
            className={style ? "active-link" : ""}
          >
            About
          </Link>
          <Link
            to="reviews"
            onClick={handleClick}
            className={style ? "active-link" : ""}
          >
            Reviews
          </Link>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default ProfileDashBoard;
