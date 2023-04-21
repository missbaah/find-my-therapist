import React from "react";
import profpic from "../images/pic.png";
import coverpic from "../images/CoverPhoto.png";
import { NavBarDark } from "../components";
import { Link, Outlet } from "react-router-dom";

const ProfileView = () => {
  return (
    <main>
      <NavBarDark />
      <div className="coverpic">
        <img src={coverpic} id="coverpic" alt="coverpic" />
      </div>
      <section className="dashboard-section">
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
          <button className="edit-btn">Call now</button>
        </section>
        <div className="person-bio">
          <Link
            to="aboutsection"
            // onClick={handleClick}
            // className={style ? "active-link" : ""}
          >
            About
          </Link>
          <Link
            to="addreview"
            // onClick={handleClick}
            // className={style ? "active-link" : ""}
          >
            Reviews
          </Link>
        </div>
        <Outlet />
      </section>
    </main>
  );
};

export default ProfileView;
