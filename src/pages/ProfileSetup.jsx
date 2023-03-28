import React from "react";
import { Link } from "react-router-dom";

const ProfileSetup = () => {
  return (
    <div>
      <nav className="profile-nav">
        <Link className="profile-logo" to="/">
          LOGO
        </Link>
      </nav>
    </div>
  );
};

export default ProfileSetup;
