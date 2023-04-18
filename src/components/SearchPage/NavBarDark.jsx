import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../Forms/Login.jsx";
import SignUp from "../Forms/SignUp.jsx";

const NavBarDark = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin((showLogin) => !showLogin);
  };
  const handleSignUp = () => {
    setShowSignUp((showSignUp) => !showSignUp);
  };

  return (
    <nav className="navbardark">
      <Link className="flex1 flex-logo" to="/">
        LOGO
      </Link>
      <section className="flex2">
        <Link to="/about">About us</Link>
        <Link to="/professionals">Professionals</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faqs">FAQs</Link>
      </section>
      <section className="flex3">
        <button className="action-btn" onClick={handleSignUp}>
          Therapist SignUp
        </button>
        <button className="action-btn" onClick={handleLogin}>
          Therapist Login
        </button>
      </section>
      <Login showLogin={showLogin} />
      <SignUp showSignUp={showSignUp} />
    </nav>
  );
};

export default NavBarDark;
