import React from "react";
import { Link } from "react-router-dom";

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
      <section>Profile</section>
    </main>
  );
};

export default ProfileDashBoard;
