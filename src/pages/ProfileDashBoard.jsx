import React from "react";
import { Link } from "react-router-dom";
import profpic from "../images/pic.png";
import coverpic from "../images/CoverPhoto.png";
import "../assets/ProfileDashBoard.css";

const ProfileDashBoard = () => {
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
        <div className="person-bio"></div>
      </section>
    </main>
  );
};

export default ProfileDashBoard;
